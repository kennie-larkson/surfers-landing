import Image from "next/image";
import pic from "./../public/wavy.jpg";

export default function Banner(): JSX.Element {
  return (
    <div className="flex ">
      <div className="relative w-1/2 bg-orange-200 ">
        <Image
          src="https://images.unsplash.com/photo-1618495843164-db3fbdca57d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx88&auto=format&fit=crop&w=870&q=80"
          alt="image"
          priority={true}
          height={300}
          width={800}
        />

        <div className="absolute top-2/4 w-full text-center ">
          <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">
            <a className="text-red-500" href="" target="_blank">
              Let's go a surfing!
            </a>
          </button>
        </div>
      </div>
      <div className="relative w-1/2 bg-slate-800">
        {/* <Image src={pic} alt="image" priority={true} height={300} width={800} /> */}
        <div className="absolute top-1/4 text-justify w-full text-white text-xl px-5  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam at
          maxime enim dolore unde suscipit optio tempora dignissimos cumque
          deserunt laborum doloribus praesentium ea quo corrupti dicta, soluta
          nam error. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Enim temporibus sed sint. Iusto, quis quaerat eveniet alias cupiditate
          necessitatibus in pariatur asperiores corrupti velit, perferendis,
          recusandae ullam natus eaque rerum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nam quos fugit aspernatur magni laborum,
          repudiandae enim ullam excepturi eveniet adipisci illo amet omnis
          saepe iusto alias impedit at aliquid quam.
        </div>
      </div>
    </div>
  );
}

// "https://images.unsplash.com/photo-1618495843164-db3fbdca57d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
