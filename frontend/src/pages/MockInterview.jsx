import DashboardLayout from "../layouts/DashboardLayout";

const MockInterview = () => {

  const questions = [
    "Explain React Hooks.",
    "What is JWT?",
    "Why MongoDB?",
    "Explain REST API.",
    "Difference between SQL and NoSQL?",
  ];

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Mock Interview
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        {questions.map((q, index) => (
          <div
            key={index}
            className="border-b py-4"
          >
            {index + 1}. {q}
          </div>
        ))}

      </div>

    </DashboardLayout>
  );
};

export default MockInterview;