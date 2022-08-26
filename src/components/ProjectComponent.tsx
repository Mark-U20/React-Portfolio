interface Props {
  image: string;
  description: string;
  link: string;
}

const ProjectTemplate: React.FC<Props> = ({ image, description, link }) => {
  return (
    <div className="border-2  border-black p-2">
      <a href={link} className="p-3 ">
        <img src={image} alt={description} />
      </a>
    </div>
  );
};

export default ProjectTemplate;
