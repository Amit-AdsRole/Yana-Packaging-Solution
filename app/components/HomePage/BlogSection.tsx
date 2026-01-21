import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "5 Benefits of Using Polypropylene Boxes in Industrial Packaging",
    image: "/home-page/banner-1.jpg",
    href: "#",
  },
  {
    title: "The Role of PET Blister Trays in Modern Retail Packaging",
    image: "/home-page/banner-1.jpg",
    href: "#",
  },
  {
    title: "Eco-Friendly Packaging: How Recyclable Materials Shape the Future",
    image: "/home-page/banner-1.jpg",
    href: "#",
  },
  {
    title: "Custom Packaging Solutions: Why One Size Doesn’t Fit All",
    image: "/home-page/banner-1.jpg",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="inline-flex w-fit rounded-full bg-[#EBEFF5] px-3 py-1 font-kanit text-sm text-[#202939]">
              Blog
            </span>

            <h2 className="font-kanit text-3xl sm:text-4xl text-[#202939]">
              Our latest blogs
            </h2>

            <p className="font-kanit text-lg text-[#697586]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <Link
            href="/blog-details"
            className="w-fit rounded-full border border-[#0C5170] px-6 py-3 font-kanit text-[#0C5170] transition hover:bg-[#0C5170] hover:text-white"
          >
            View all
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {blogs.map((blog, index) => (
    <Link
      key={index}
      href={blog.href}
      className="group flex flex-col md:flex-row rounded-[30px] border border-[#E3E8EF] bg-white overflow-hidden hover:shadow-md transition"
    >
      {/* Image */}
      <div className="relative w-full md:w-[40%] h-64 md:h-auto">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-[60%]">
        <h3 className="font-kanit text-xl sm:text-2xl leading-8 text-[#202939]">
          {blog.title}
        </h3>

        <span className="mt-6 inline-flex items-center gap-2 font-medium text-[#364152]">
          Read more
          <ArrowRight className="-rotate-90" size={16} />
        </span>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}
