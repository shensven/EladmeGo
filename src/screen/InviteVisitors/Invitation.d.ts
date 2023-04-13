enum Field {
  id = 'ID',
  'enterprise.name' = '企业名称',
  floor_name = '楼层',
  name = '访客姓名',
  type_text = '类型',
  status_text = '状态',
  sex_text = '访客性别',
  mobile = '访客手机号',
  'member.mobile' = '邀请人手机号',
  time = '访问日期',
  duration_text = '访问时长',
  remark = '来访事由',
}

interface Invitation {
  lists: {
    data: {
      id: number;
      name: string;
      mobile: string;
      member_id: number;
      duration: 0.5 | 1 | 3 | 6 | 12 | 24;
      duration_text: '0.5h' | '1h' | '3h' | '6h' | '12h' | '24h';
      time: string;
      staff_id: number;
      enterprise_id: number;
      unit_id: number;
      project_id: number;
      qr_code: string;
      status: 1 | 2;
      status_text: '已失效' | '生效中';
      sex: 0;
      sex_text: '';
      remark: string;
      type: 1;
      type_text: '访客邀约';
      rejection_reason: string | null;
      floor: string;
      floor_name: string;
      floorName: string;
      invitation_time: string;
      created_at: string;
      updated_at: string;
      unit: {
        id: number;
        name: '高区电梯' | '低区电梯';
        elevator_num: null;
        floor_name: null;
      };
      enterprise: {
        id: number;
        name: string;
        type_name: string;
      };
      member: {
        id: number;
        mobile: string;
        sex_text: '未知';
        source_text: string;
        grade_info: [];
        disabled_text: '启用';
        point: 0;
        grade_name: '';
        project_info: null;
      };
    }[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string | null;
    next_page_url: string | null;
    from: number;
    to: number;
    total: number;
    per_page: number;
    path: string;
  };
  info: {
    enterprise_name: string;
    enterprise_id: number;
    floor_name: string;
    job_number: string;
  };
  field: {
    dataIndex: keyof typeof Field;
    title: Field;
  }[];
}

export default Invitation;
