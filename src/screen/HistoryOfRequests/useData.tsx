const useData = () => {
  const data: {
    uuid: string;
    api: string;
    header: Record<string, string>;
    query: Record<string, string>;
    onPress?: () => void;
  }[] = [
    {
      uuid: '1',
      api: '/member/v1/member/active',
      header: {authorization: '12323324332432dfsgdhfgdgkdhsgf239dhfdefuewhfe'},
      query: {},
      onPress: () => console.log('1'),
    },
    {
      uuid: '2',
      api: '/member/v1/member/detail',
      header: {authorization: '12323324332432dfsgdhfgdgkdhsgf239dhfdefuewhfe'},
      query: {},
      onPress: () => console.log('2'),
    },
    {
      uuid: '3',
      api: '/member/v1/member/isStaff',
      header: {authorization: '12323324332432dfsgdhfgdgkdhsgf239dhfdefuewhfe'},
      query: {},
      onPress: () => console.log('3'),
    },
    {
      uuid: '4',
      api: '/member/v1/member/getPassQr',
      header: {},
      query: {
        floor: '41',
        isAdmin: 'true',
      },

      onPress: () => console.log('4'),
    },
    {
      uuid: '5',
      api: '/member/v1/member/getPassQr',
      header: {Authorization: '12323324332432dfsgdhfgdgkdhsgf239dhfdefuewhfe'},
      query: {},
      onPress: () => console.log('5'),
    },
    {
      uuid: '6',
      api: '/member/v1/member/getPassQr',
      header: {},
      query: {},
      onPress: () => console.log('6'),
    },
    {
      uuid: '7',
      api: '/member/v1/member/getPassQr',
      header: {authorization: '12323324332432dfsgdhfgdgkdhsgf239dhfdefuewhfe'},
      query: {floor: '71'},
      onPress: () => console.log('7'),
    },
  ];

  return data;
};

export default useData;
