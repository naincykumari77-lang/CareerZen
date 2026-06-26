import DashboardLayout from "../layouts/DashboardLayout";

const JobMatch = () => {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Job Match
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <textarea
          rows="10"
          placeholder="Paste Job Description"
          className="w-full border rounded p-4"
        />

        <button
          className="mt-4 bg-purple-600 text-white px-6 py-3 rounded"
        >
          Analyze Match
        </button>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-6">

        <h2 className="text-2xl font-bold">
          Match Score
        </h2>

        <div className="text-5xl text-green-600 font-bold mt-4">
          78%
        </div>

      </div>

    </DashboardLayout>
  );
};

export default JobMatch;