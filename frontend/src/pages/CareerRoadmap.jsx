import DashboardLayout from "../layouts/DashboardLayout";

const CareerRoadmap = () => {

  const roadmap = [
    "Learn Docker",
    "Learn Kubernetes",
    "Learn AWS",
    "Learn CI/CD",
    "Learn System Design",
  ];

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Career Roadmap
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        {roadmap.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mb-6"
          >

            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
              {index + 1}
            </div>

            <h2>{item}</h2>

          </div>
        ))}

      </div>

    </DashboardLayout>
  );
};

export default CareerRoadmap;