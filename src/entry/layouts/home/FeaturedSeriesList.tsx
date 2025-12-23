import { Card, CardHeader, CardBody } from '@/components/react';

const seriesList = [
  { title: '非确定唠嗑儿', description: '社区每周固定活动，周三或周四举办，大家坐在一起畅聊，在增加彼此了解的同时，看能否碰撞出新项目、新合作的火花。' },
  { title: '一起去走走', description: '每月至少一次的户外活动，可以是徒步、骑行、露营等，在锻炼与社交之余，还能一定程度协作。' },
  { title: '正念+', description: '' },
  { title: '银湖线下读书会', description: '' },
  { title: '个体商业变现', description: '由「瑰夏」主理人显宁老师带来的帮助自由职业者、小微创业者发掘自我与品牌优势并更好进行商业变现的系列活动。' },
];

function FeaturedSeriesList() {
  return (
    <div className="grid gap-4 lg:gap-9 grid-cols-1 sm:grid-cols-3">
      {seriesList.map(series => {
        return (
          <Card key={series.title}>
            <CardHeader className="p-6 pb-1.5">
              <h3 className="grow m-0 text-xl font-semibold text-center">{series.title}</h3>
            </CardHeader>
            <CardBody className="p-6 pt-1.5">
              <p className="m-0 text-sm break-all">{series.description}</p>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default FeaturedSeriesList;
