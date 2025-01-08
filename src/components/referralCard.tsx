import { Card, CardBody, CardHeader } from "@nextui-org/card";
interface ReferalCardProps {
  title: string;
}
const ReferalCard = (props: ReferalCardProps) => {
  const { title } = props;
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="https://fakeimg.pl/500x300"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default ReferalCard;
