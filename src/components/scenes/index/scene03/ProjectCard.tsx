import { motion } from 'framer-motion';
import Image from 'next/image';

export type Project = {
  id: number;
  name: string;
  period: string;
  imageUrl: string;
  skills: string[];
  pathname?: string;
};

type Props = {
  project: Project;
  onClick?: (proejctPathname?: string) => void;
};

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <button onClick={() => onClick?.(project.pathname)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`shadow-lg rounded-lg overflow-hidden min-w-[250px] lg:min-w-[300px]`}
      >
        <Image
          width={300}
          height={200}
          src={project.imageUrl}
          alt={project.name}
          style={{ height: 'auto' }}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2">{project.name}</h3>
          <p>{project.period}</p>
        </div>
      </motion.div>
    </button>
  );
};

export default ProjectCard;
