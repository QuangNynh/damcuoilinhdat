"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Calendar from "./hooks/calender";
import PhotoAlbum from "./components/PhotoAlbum";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // thời gian animation (ms)
      once: false,
    });
    // refresh khi ảnh tải xong, hoặc container size đổi
  }, []);
  return (
    <div className="py-2 container overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <div className="md:h-screen h-[70vh] relative overflow-hidden overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/3 z-0">
          <img
            src="/tach-nen.png"
            alt="Background"
            className="block w-full max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] object-contain 
      [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
          />
        </div>

        {/* Content nằm trên */}
        <div className="relative z-10 flex items-end justify-center md:h-full h-[70vh]">
          {/* Content */}
          <div className="relative z-10 flex items-end justify-center ">
            <div className="text-center px-3 sm:px-4 pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16">
              <h1 data-aos="zoom-in" className="text-2xl sm:text-3xl lg:text-4xl  font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 drop-shadow-lg">
                <span className="font-imperial-script">Tiến Đạt</span>
                <span className="mx-1 sm:mx-2 md:mx-3">-</span>
                <span className="font-imperial-script">Mỹ Linh</span>
              </h1>
              <p
                data-aos="fade-left"
                className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl drop-shadow-md mb-1 sm:mb-2 md:mb-3"
              >
                THƯ MỜI TIỆC CƯỚI
              </p>
              <hr data-aos="fade-right" className="my-1 sm:my-2 md:my-3 lg:my-4 border-black mx-auto w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20" />
              <p data-aos="fade-left" className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl drop-shadow-md mb-1 sm:mb-2">
                CHỦ NHẬT - 9H00
              </p>
              <p
                data-aos="fade-right"
                className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl drop-shadow-md mb-1 sm:mb-2 md:mb-3"
              >
                26 . 10 . 2025
              </p>
              <hr data-aos="fade-left" className="my-1 sm:my-2 md:my-3 lg:my-4 border-black mx-auto w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div data-aos="fade-down" className="text-center px-3 sm:px-4 py-1 md:py-6 lg:py-8 xl:py-10 text-2xl lg:text-4xl">
        <p className=" drop-shadow-md font-imperial-script mb-1 sm:mb-2 md:mb-3">Hôn nhân là chuyện cả đời</p>
        <p className=" drop-shadow-md font-imperial-script">Yêu người vừa ý, cưới người mình thương</p>
      </div>

      {/* Family Information Section */}
      <div className="px-3 sm:px-4 py-3 sm:py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-2 text-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 ">
          <div data-aos="fade-right" className="text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl ">
            <p className="font-semibold mb-1 sm:mb-2 md:mb-3">NHÀ TRAI</p>
            <p className="mb-1 sm:mb-2 text-xs sm:text-base">ÔNG PHẠM VĂN ĐINH</p>
            <p className="mb-1 sm:mb-2 text-xs sm:text-base">BÀ TRẦN THỊ THUỶ</p>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Xóm Trại 4, số nhà 33, ngõ 482, khu phố Đa Hội, P.Phù Khê, Bắc Ninh</p>
          </div>
          <div data-aos="fade-left" className="text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl">
            <p className="font-semibold mb-1 sm:mb-2 md:mb-3">NHÀ GÁI</p>
            <p className="mb-1 sm:mb-2 text-xs sm:text-base">ÔNG PHẠM ĐỨC THÀNH</p>
            <p className="mb-1 sm:mb-2 text-xs sm:text-base">BÀ NGUYỄN THỊ MINH ĐƯỜNG</p>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Số 9 Huỳnh Thúc Kháng, Hà Đông, Hà Nội</p>
          </div>
        </div>
      </div>

      {/* Couple Section */}
      <div className="px-3 lg:px-20 py-3 sm:py-4 md:py-6 lg:py-8">
        <div className="flex justify-between items-center text-center pb-2 text-xl lg:text-4xl overflow-hidden h-auto">
          <div className="w-[40%] no-scrollbar">
            <p data-aos="fade-down" className="font-semibold mb-1 sm:mb-2 md:mb-3 lg:mb-4 h-auto">
              Chú Rể
            </p>
            <p data-aos="fade-up" className="font-imperial-script h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16">
              Tiến Đạt
            </p>
          </div>
          <div className="flex-1 flex justify-center overflow-hidden">
            <div className="heart-beat py-1 sm:py-2 h-auto">
              <Image
                src="/trai-tim.png"
                alt="Heart"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
              />
            </div>
          </div>
          <div className="w-[40%] no-scrollbar">
            <p data-aos="fade-down" className="font-semibold py-2">
              Cô Dâu
            </p>
            <p data-aos="fade-up" className="font-imperial-script h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16">
              Mỹ Linh
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 py-2 sm:py-2 md:py-3 lg:py-4 overflow-hidden">
          <div data-aos="fade-right" className="w-[45%] h-[30vh]  md:h-[65vh] lg:h-[70vh] relative no-scrollbar overflow-hidden">
            <Image src="/chu-re.JPG" alt="chu-re" fill className="object-contain" />
          </div>
          <div data-aos="fade-left" className="w-[45%] h-[30vh]  md:h-[65vh] lg:h-[70vh] relative no-scrollbar overflow-hidden">
            <Image src="/co-dau.JPG" alt="co-dau" fill className="object-contain" />
          </div>
        </div>
      </div>
      <hr data-aos="zoom-in" className=" border-black mx-auto w-8 sm:w-10 md:w-12 lg:w-16 xl:w-1/2" />
      <div className="px-3 sm:px-4 py-3 sm:py-4 md:py-6 lg:py-8 no-scrollbar">
        <p
          data-aos="fade-down"
          className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-imperial-script mb-1 sm:mb-2"
        >
          Thư mời
        </p>
        <p data-aos="fade-up" className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-center drop-shadow-md mb-2 sm:mb-3 md:mb-4">
          THAM DỰ LỄ CƯỚI
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-1 sm:p-2 overflow-hidden">
        {/* Trái */}
        <div data-aos="fade-right" className="basis-[40%] sm:basis-[25%] min-w-0 no-scrollbar overflow-hidden">
          <Image
            src="/album/anh-phu-2.JPG"
            alt="thu-moi"
            width={200}
            height={400}
            style={{ width: "100%", height: "auto" }}
            className="block rounded-sm max-w-full"
          />
        </div>

        {/* Giữa (rộng hơn -> cao hơn) */}
        <div data-aos="zoom-in" className="basis-[50%] sm:basis-[30%] min-w-0 no-scrollbar overflow-hidden">
          <Image
            src="/album/anh-phu.JPG"
            alt="thu-moi"
            width={200}
            height={450}
            style={{ width: "100%", height: "auto" }}
            className="block rounded-sm max-w-full"
          />
        </div>

        {/* Phải */}
        <div data-aos="fade-left" className="basis-[40%] sm:basis-[25%] min-w-0 no-scrollbar overflow-hidden">
          <Image
            src="/album/anhphu-3.JPG"
            alt="thu-moi"
            width={200}
            height={400}
            style={{ width: "100%", height: "auto" }}
            className="block rounded-sm max-w-full"
          />
        </div>
      </div>

      {/* Ngày cưới */}
      <div data-aos="fade-up" className="text-center px-3 sm:px-4 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-gray-800">
          TIỆC MỪNG LỄ THÀNH HÔN
        </h2>

        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-2 sm:mb-3 md:mb-4">
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-700">Vào Lúc</span>
          <span className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">09h00</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-700">Chủ Nhật</span>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-2 sm:mb-3 md:mb-4">
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-700">Tháng</span>
          <span className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">10</span>
          <span className="text-gray-500">|</span>
          <span className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 italic font-imperial-script">26</span>
          <span className="text-gray-500">|</span>
          <span className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">2025</span>
        </div>

        <p className="text-sm sm:text-sm md:text-base text-gray-600 italic">(Tức Ngày 6 Tháng 09 Năm Ất Tỵ)</p>
      </div>

      {/* Calendar Section */}
      <div data-aos="fade-up" className="px-3 sm:px-4 py-3 sm:py-4 md:py-6">
        <Calendar className="w-full h-full" />
      </div>
      <div className="px-3 text-3xl sm:text-4xl md:text-4xl lg:text-5xl no-scrollbar overflow-hidden pt-3">
        <p className="font-imperial-script text-center ">Địa điểm tổ chức</p>
      </div>
      <div className="px-3 flex items-center justify-center flex-col gap-3 sm:gap-4">
        <div className="flex items-center justify-center flex-col p-6">
          <div className="text-xl lg:text-2xl text-center">
            <p className="font-imperial-script text-center ">Lễ thành hôn tại gia đình nhà trai </p>
            <p className="font-imperial-script text-center ">9H00 - 10H</p>
          </div>
          <p className="text-gray-600 text-sm sm:text-sm md:text-base text-center ">
            Xóm Trại 4, số nhà 33, ngõ 482, khu phố Đa Hội, P.Phù Khê, Bắc Ninh
          </p>
        </div>
        <div className="w-full max-w-full overflow-hidden">
          <div className="text-xl lg:text-2xl text-center">
            <p className="font-imperial-script text-center ">Tiệc mừng lễ thành hôn </p>
            <p className="font-imperial-script text-center ">11H30 - 13H00</p>
          </div>
          <p className="text-gray-600 text-sm sm:text-sm md:text-base text-center pb-5 px-4">
            SN 547 - Đường Lý Thường Kiệt Khu Phố Đa Hội - P.Phù Khê - Bắc Ninh
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8306.05881960179!2d105.9139244!3d21.123143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350709554912d7%3A0x4f560b309cfa846e!2zTmjDoCBow6BuZyBOZ-G7jWMgQW5o!5e1!3m2!1svi!2s!4v1761116364936!5m2!1svi!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="px-3 sm:px-4 py-3 sm:py-4 md:py-6 text-2xl sm:text-3xl md:text-3xl">
        <p data-aos="fade-down" className=" lg:text-4xl xl:text-5xl font-imperial-script text-center mb-3 sm:mb-4 md:mb-6">
          Album ảnh cưới
        </p>
        <PhotoAlbum />
      </div>

      {/* QR Code Section */}
      <div className="relative w-full lg:h-[60vh] h-[50vh] overflow-hidden ">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/album/anh-cuoi.JPG" alt="anh-cuoi" fill className="object-cover object-top opacity-20" />
        </div>

        {/* Overlay */}

        {/* QR Code Button */}
        <div data-aos="fade-up" className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="text-center text-2xl md:text-3xl  font-imperial-script drop-shadow-md mb-1 sm:mb-2 md:mb-3 lg:w-1/2 text-black/80 px-3 sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-center text-2xl md:text-5xl   drop-shadow-md">
              Chân thành cảm ơn quý vị – sự hiện diện của quý vị là niềm vinh hạnh lớn đối với chúng tôi.
            </h1>
          </div>
          <button
            onClick={() => {
              const qrModal = document.getElementById("qr-modal");
              if (qrModal) {
                qrModal.classList.remove("hidden");
              }
            }}
            className="bg-red-400 bg-opacity-90 hover:bg-opacity-100 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Mừng cưới
          </button>
        </div>
        <div className="mb-8"></div>
      </div>

      {/* QR Code Modal */}
      <div
        id="qr-modal"
        className="fixed inset-0  bg-opacity-70 backdrop-blur-sm z-50 hidden flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const qrModal = document.getElementById("qr-modal");
            if (qrModal) {
              qrModal.classList.add("hidden");
            }
          }
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm mx-4 transform transition-all duration-300 scale-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">QR Code</h3>
            <button
              onClick={() => {
                const qrModal = document.getElementById("qr-modal");
                if (qrModal) {
                  qrModal.classList.add("hidden");
                }
              }}
              className="text-gray-500 hover:text-gray-700 text-xl transition-colors duration-200"
            >
              ✕
            </button>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              {/* Placeholder for QR Code - bạn có thể thay thế bằng QR code thực tế */}
              <div className="w-48 h-48 bg-gray-300 rounded flex items-center justify-center text-gray-600 no-scrollbar">
                <Image src="/qr.jpeg" alt="qr" width={200} height={400} />
              </div>
            </div>
            <p className="text-sm text-gray-600">Quét mã QR để xem thông tin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
