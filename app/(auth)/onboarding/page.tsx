import AccountProfile from "../../../components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();

  const userInfor = {};

  const userData = {
    id: "",
    // objectId: userInfor?._id,
    // username: userInfor?.username || user?.username,
    // name: userInfor?.name || user?firstName || "",
    // image: userInfor?.image || user.imageURL,
  };

  return (
    <main className="mx-auto flex max-2-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text text-dark-1">Onboarding</h1>
      <p className="mt-3 text-base-regular">Complate profile</p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
