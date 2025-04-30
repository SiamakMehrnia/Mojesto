import AdminForm from "../../components/adminForm";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <AdminForm />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie || "";

  if (!cookies.includes("admin-auth=true")) {
    return {
      redirect: {
        destination: "/adminPanel/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

