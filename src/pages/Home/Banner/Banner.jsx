import BannerImg from "../../../assets/home/serveBanner.png";
import dish from "../../../assets/dish/1.png";

const Banner = () => {
  return (
    <div
      className="bg-center relative bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="w-11/12 mx-auto lg:h-screen">
        <div className="lg:flex justify-between">
          <div className="flex items-end h-screen">
          <div className="">
                <img src={dish} alt="" />
              </div>
            <div className="flex items-end">
              <img
                className="w-full h-full"
                src="https://img.freepik.com/premium-photo/full-body-smiling-chef-cook-uniform-with-fork-knife-white-background-job-id-b3c603fb494d4aa2b_343960-98762.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex  items-center">
            <div className="">
              <div className="">
                <img src={dish} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="font-style font-bold text-3xl">
                Welcome to Flavor Haven
              </h2>
              <p className="w-[60%] mx-auto text-center">
                Experience a culinary journey like no other, where every bite
                tells a story. Indulge in fresh, delicious, and handcrafted
                dishes made with love
              </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Banner;
