const usersRequests = {
  actionGetUsersRequest: (page) => ({
    url: `api/?inc=gender,name,picture&results=20&page=${page}`,
    method: 'get',
  }),
};

export default usersRequests;
