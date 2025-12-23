import { Card, CardHeader, CardBody } from '@/components/react';

const seriesList = [
  { title: '银湖大社区', description: '' },
  { title: '银湖大学（策划中）', description: '' },
];

function StrategicProjectList() {
  return (
    <div className="grid gap-4 lg:gap-9 grid-cols-1 sm:grid-cols-2">
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

export default StrategicProjectList;
