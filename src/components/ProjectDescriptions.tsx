interface Props {
  title: string;
  description: string;
}

const DescriptionTemplate: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="border-4  border-zinc-800 p-2 pt-4">
      <p className="bg-green-500"> {title}</p>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionTemplate;
