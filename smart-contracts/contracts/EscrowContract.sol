// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract EscrowContract {
    struct Task {
        address clientAddress;
        address artistAddress;
        string taskTitle;
        string taskDescription;
        uint256 taskAmount;
        uint256 clientDeposit;
        uint256 artistDeposit;
        bool isCompleted;
        bool isSubmitted;
        bool isAssigned;
        bool isPreviewed;
        bool isCancelled;
    }

    struct Submission{
        string originalCID;
        string previewCID;
    }

    modifier onlyClient(uint256 _taskId){
        if(msg.sender == tasks[_taskId].clientAddress)
            _;
        else
            revert("You are not owner of this task");
    }

    modifier onlyArtist(uint256 _taskId){
        if(msg.sender == tasks[_taskId].artistAddress)
            _;
        else
            revert("You are not assigned to this task");
    }

    modifier onlyArtistOrClient(uint256 _taskId){
        if(msg.sender == tasks[_taskId].artistAddress || msg.sender == tasks[_taskId].clientAddress)
            _;
        else
            revert("You are neither owner nor have been assigned to this task");
    }

    event TaskCreated(address indexed client, uint256 taskId);
    event TaskAssigned(address indexed artist, uint256 taskId);
    event TaskCancelled(uint256 taskId);
    event TaskCompleted(uint256 taskId);
    event TaskPreviewed(uint256 taskId);
    event TaskSubmitted(uint256 taskId);

    mapping(uint256 => Task) public tasks;
    mapping(uint256 => Submission) private taskSubmissions;
    uint256 taskId = 0;

    function createTask(uint256 _taskAmount, uint256 _clientDeposit, string memory _taskTitle, string memory _taskDescription) public payable returns(uint256) {
    require(msg.value >= _clientDeposit + _taskAmount, "Insufficient client deposit and task amount");
        taskId++;
        tasks[taskId] = Task({
        clientAddress: msg.sender,
        taskAmount: _taskAmount,
        clientDeposit: _clientDeposit,
        taskTitle: _taskTitle,
        taskDescription: _taskDescription,
        isCompleted: false,
        isAssigned: false,
        isSubmitted: false,
        isPreviewed: false,
        isCancelled: false,
        artistAddress: address(0),
        artistDeposit: 0
        });

        // Check if there's an excess payment, refund it to the client
        if (msg.value > _clientDeposit + _taskAmount) {
            payable(msg.sender).transfer(msg.value - _clientDeposit - _taskAmount);
        }

        // Emit TaskCreated event
        emit TaskCreated(msg.sender, taskId);
        
        return taskId;
    }

    function showTasks() public view returns (Task[] memory){
        Task[] memory ret = new Task[](taskId);
        for (uint i = 0; i < taskId; i++) {
            ret[i] = tasks[i];
        }
        return ret;
    }

    function assignArtist(uint256 _taskId, address _artistAddress) public onlyClient(_taskId){
        tasks[_taskId].artistAddress = _artistAddress;
    }

    function acceptTaskArtist(uint256 _taskId, uint256 _artistDeposit) public onlyArtist(_taskId) payable{
        require(msg.value <= _artistDeposit, "Insufficient funds for deposits");
        if(msg.value > _artistDeposit) {
            payable(msg.sender).transfer(msg.value - _artistDeposit);
        }
        tasks[_taskId].isAssigned = true;
        emit TaskAssigned(msg.sender, _taskId);
    }

    function rejectTaskArtist(uint256 _taskId) public onlyArtist(_taskId) {
        require(!tasks[_taskId].isAssigned, "Alreday Accpeted by you! Cancel to remove this task");
        tasks[_taskId].artistAddress = address(0);
    }

    function cancelTaskArtist(uint256 _taskId) public onlyArtist(_taskId) {

        payable(tasks[_taskId].clientAddress).transfer(tasks[_taskId].taskAmount + ((tasks[_taskId].artistDeposit*90) / 100));
        tasks[_taskId].isCancelled = true;
        emit TaskCancelled(_taskId);
    }

    function submitTask(uint256 _taskId, string memory _originalCID, string memory _previewCID) public onlyArtist(_taskId){
        require(tasks[_taskId].isAssigned, "Task has not been Assigned yet!");
        taskSubmissions[_taskId].originalCID = _originalCID;
        taskSubmissions[_taskId].previewCID = _previewCID;
        tasks[_taskId].isSubmitted = true;
        emit TaskSubmitted(_taskId);
    }

    function previewTask(uint256 _taskId) public onlyClient(_taskId) returns (string memory) {
        require(tasks[_taskId].isSubmitted, "Task has not been submitted yet!");
        tasks[_taskId].isPreviewed = true;
        emit TaskPreviewed(_taskId);
        return taskSubmissions[_taskId].previewCID;
    }

    function acceptTaskClient(uint256 _taskId) public onlyClient(_taskId) returns (string memory) {
        require(tasks[_taskId].isPreviewed, "Task has not been submitted or previewed yet!");

        payable(msg.sender).transfer((tasks[_taskId].clientDeposit * 90) / 100);
        payable(tasks[_taskId].artistAddress).transfer(((tasks[_taskId].artistDeposit * 90) / 100) + tasks[_taskId].taskAmount);

        tasks[_taskId].isCompleted = true;
        emit TaskCompleted(_taskId);

        return taskSubmissions[_taskId].originalCID;
    }

    function cancelTaskClient(uint256 _taskId) public onlyClient(_taskId) {
        require(tasks[_taskId].isPreviewed, "Task has not been submitted or previewed yet!");

        payable(msg.sender).transfer((tasks[_taskId].taskAmount * 90) / 100);
        payable(tasks[_taskId].artistAddress).transfer((tasks[_taskId].clientDeposit * 90) / 100);

        tasks[_taskId].isCancelled = true;
        emit TaskCancelled(_taskId);
    }

}