import "./TitleSection.scss";

interface TitleSectionProps {
  title: string;
}

const TitleSection = (props: TitleSectionProps) => {
  const { title } = props;
  return (
    <div className='title-section'>
      <h2>{title}</h2>
      <hr className='horizontal-line' />
    </div>
  );
};

export default TitleSection;
