const usersRequests = {
  actionGetUsersRequest: () => ({
    url: 'api/?inc=gender,name,picture&results=20&page=1',
    method: 'get',
  }),
};

export default usersRequests;
