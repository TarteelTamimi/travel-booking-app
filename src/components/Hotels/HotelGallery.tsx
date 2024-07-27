import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from "react-modal";
import { HotelPhotoModel } from "../../models/HotelPhoto";
import { useFetchGallery } from "../../hooks/useFetchGallery.hook";

const HotelGallery: React.FC = () => {
  const { id } = useParams();
  const hotelId = Number(id);
  const { photos, error } = useFetchGallery(hotelId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<HotelPhotoModel | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const openModal = (photo: HotelPhotoModel) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {error ? (
        <div className="absolute top-64 left-1/2 flex justify-center items-center text-red-600">
          <FiAlertTriangle />
          <span className="pl-2">Failed to fetch hotel photos</span>
        </div>
      ) : (
        <Slider {...sliderSettings} className="w-[68%] h-2/5 m-5">
          {photos.map((photo: HotelPhotoModel) => (
            <div key={photo.id} onClick={() => openModal(photo)} className="border h-[300px] rounded-2xl bg-white shadow cursor-pointer">
              <img src={photo.url} alt="hotel photo" className="rounded-sm w-full h-full" />
            </div>
          ))}
        </Slider>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Photo Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedPhoto && (
          <img src={selectedPhoto.url} alt="hotel photo" className="rounded-sm w-full h-full" />
        )}
      </Modal>
    </>
  );
}

export default HotelGallery;
