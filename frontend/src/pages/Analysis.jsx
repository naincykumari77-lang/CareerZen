import DashboardLayout from "../layouts/DashboardLayout";
import ATSCard from "../components/ATSCard";
import SkillCard from "../components/SkillCard";
import ResumeSuggestions from "../components/ResumeSuggestions";

const Analysis = () => {

  const suggestions = [
    {
      title: "Add More Technical Skills",
      description: "Include AWS and Docker"
    }
  ];

  return (
    <DashboardLayout>

      <ATSCard score={86} />

      <SkillCard
        title="Detected Skills"
        skills={[
          "React",
          "Node.js",
          "MongoDB"
        ]}
      />

      <ResumeSuggestions
        suggestions={suggestions}
      />

    </DashboardLayout>
  );
};

export default Analysis;