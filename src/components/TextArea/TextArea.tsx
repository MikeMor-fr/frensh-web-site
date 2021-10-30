import "./TextArea.scss";

interface TextAreaProps {
  title: string;
  description: string;
}

const TextArea = (props: TextAreaProps) => {
  const { title, description } = props;
  return (
    <div className='text-area'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TextArea;
