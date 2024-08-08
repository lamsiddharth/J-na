import { Avatar } from "./BlogCard" 

export const Appbar = () => {
  return (
    <div className="flex justify-center">
        <div className="border-b flex justify-between w-screen max-w-screen-lg pt-2 ">
          <div className="font-extrabold text-3xl">
            Jñāna
          </div>
          <div className="font-bold">
            <Avatar size="big" name="siddharth" />
          </div>
        </div>
    </div>
  )
}
