const giaphahoTran = {
  root: {
    name: 'ông tổ',
    children: ['ong-ba', 'ba-bac'],
    parentId: '',
  },
  'ong-ba': {
    name: 'ông bá',
    children: ['bac-bay', 'di-sau'],
    parentId: 'root',
  },
  'ba-bac': {
    name: 'bà bắc',
    children: [],
    parentId: 'root',
  },
  'bac-bay': {
    name: 'bác bảy',
    children: ['anh-nam', 'chi-huong'],
    parentId: 'ong-ba',
  },
  'di-sau': {
    name: 'dì sáu',
    children: [],
    parentId: 'ong-ba',
  },
  'anh-nam': {
    name: 'anh nam',
    children: [],
    parentId: 'bac-bay',
  },
  'chi-huong': {
    name: 'chị hường',
    children: [],
    parentId: 'bac-bay',
  },
};

giaphahoTran['di-tu'] = {
  name: 'dì tư',
  children: [],
  parentId: 'ong-ba',
};

giaphahoTran['ong-ba'].children.push('di-tu');

giaphahoTran['ong-ba'].children.map((id) =>
  console.log(`Ong ba ${id}: `, giaphahoTran[id])
);
