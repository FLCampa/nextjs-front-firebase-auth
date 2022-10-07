// External Libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Hooks
import useAuth from "../../data/hook/useAuth";

const UserAvatar: React.FC = () => {
  const { user } = useAuth();
  const source = user?.imageUrl ?? "/images/avatar.svg";

  return (
    <Link href="/profile">
      <Image
        loader={() => source}
        src={source}
        alt="user avatar"
        width="42px"
        height="42px"
      />
    </Link>
  );
};

export default UserAvatar;
