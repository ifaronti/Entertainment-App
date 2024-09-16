import Link from "next/link";

type deleteProp = { deleteImage: () => void };

export default function UploadorDelete({ deleteImage }: deleteProp) {
  return (
    <div className="flex gap-2 items-center mx-auto">
      <Link className="text-[#FC4747]" href="/upload">
        Upload
      </Link>
      <p className="text-white">or</p>
      <p
        className="text-[#FC4747] cursor-pointer hover:text-red-600"
        onClick={deleteImage}
      >
        Delete
      </p>
    </div>
  );
}
