import DashboardLayout from "../layouts/DashboardLayout";

const UploadResume = () => {
  return (
    <DashboardLayout>

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Upload Resume
        </h1>

        <div className="border-2 border-dashed p-12 rounded-xl text-center">

          <input
            type="file"
            accept=".pdf"
            className="mb-4"
          />

          <p className="text-gray-500">
            Upload Resume PDF
          </p>

        </div>

        <button
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded"
        >
          Analyze Resume
        </button>

      </div>

    </DashboardLayout>
  );
};

export default UploadResume;