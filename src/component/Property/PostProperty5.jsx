import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera, FaVideo, FaTimes, FaImage } from "react-icons/fa";
import { MdCamera, MdVideocam } from "react-icons/md";

const PostProperty5 = () => {
  const navigate = useNavigate();
  const photoRef = useRef();
  const videoRef = useRef();
  const cameraVideoRef = useRef();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraMode, setCameraMode] = useState("photo"); 
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  
  const handleTakePhotos = async () => {
    try {
      setCameraMode("photo");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Camera access denied. Please allow camera permissions.");
    }
  };

  
  const handleTakeVideos = async () => {
    try {
      setCameraMode("video");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: true,
      });

      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Camera access denied. Please allow camera permissions.");
    }
  };

  
  const closeCamera = () => {
    if (cameraVideoRef.current && cameraVideoRef.current.srcObject) {
      const tracks = cameraVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      cameraVideoRef.current.srcObject = null;
    }

    if (isRecording && mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }

    setIsCameraOpen(false);
    setMediaRecorder(null);
    setRecordedChunks([]);
  };

  
  const capturePhoto = () => {
    if (cameraVideoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = cameraVideoRef.current.videoWidth;
      canvas.height = cameraVideoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(cameraVideoRef.current, 0, 0);

     
      canvas.toBlob(
        (blob) => {
          const file = new File([blob], `photo-${Date.now()}.jpg`, {
            type: "image/jpeg",
          });

        
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);

          if (photoRef.current) {
            photoRef.current.files = dataTransfer.files;
            
            const changeEvent = new Event("change", { bubbles: true });
            photoRef.current.dispatchEvent(changeEvent);
          }

          alert("Photo captured successfully!");
          closeCamera();
        },
        "image/jpeg",
        0.9
      );
    }
  };


  const startRecording = () => {
    if (cameraVideoRef.current && cameraVideoRef.current.srcObject) {
      const stream = cameraVideoRef.current.srcObject;
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const file = new File([blob], `video-${Date.now()}.webm`, {
          type: "video/webm",
        });

        
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        if (videoRef.current) {
          videoRef.current.files = dataTransfer.files;
          const changeEvent = new Event("change", { bubbles: true });
          videoRef.current.dispatchEvent(changeEvent);
        }

        alert("Video recorded successfully!");
        setRecordedChunks([]);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecordedChunks(chunks);
      setIsRecording(true);
    }
  };

  
  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      closeCamera();
    }
  };

  
  const handleAddPhotos = () => {
    photoRef.current.click();
  };

 
  const handleAddVideos = () => {
    videoRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-10 text-[13px]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
       
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-black">
            Upload photos & videos
          </h2>
        </div>

       
        <div className="border border-dashed rounded-2xl p-10 text-center mb-8 bg-gray-50">
          <FaCamera className="mx-auto text-4xl text-gray-400 mb-3" />
          <p className="font-semibold text-gray-700">
            Add photos to get 5X more responses.
          </p>
          <p className="text-gray-500 text-sm mb-4">
            90% tenants contact on properties with photos.
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm">
              <button
                onClick={handleTakePhotos}
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg shadow hover:scale-105 transition"
              >
                <MdCamera className="text-xs" />
                Take Photos
              </button>

              <button
                onClick={handleAddPhotos}
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg shadow hover:scale-105 transition"
              >
                <FaImage className="text-xs" />
                Add Photos
              </button>
            </div>
          </div>

          <input
            type="file"
            multiple
            accept="image/*"
            ref={photoRef}
            className="hidden"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                alert(`${e.target.files.length} photo(s) selected!`);
              }
            }}
          />
        </div>

       
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-gray-500 text-sm">OR</span>
          </div>
        </div>

       
        <div className="border border-dashed rounded-2xl p-10 text-center mb-10 bg-gray-50">
          <FaVideo className="mx-auto text-4xl text-gray-400 mb-3" />
          <p className="font-semibold text-gray-700">
            Add videos to get 5X more responses.
          </p>
          <p className="text-gray-500 text-sm mb-4">
            90% tenants contact on properties with videos.
          </p>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm">
              <button
                onClick={handleTakeVideos}
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg shadow hover:scale-105 transition"
              >
                <MdVideocam className="text-xs" />
                Take Videos
              </button>

              <button
                onClick={handleAddVideos}
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg shadow hover:scale-105 transition"
              >
                <FaVideo className="text-xs" />
                Add Videos
              </button>
            </div>
          </div>

          <input
            type="file"
            accept="video/*"
            ref={videoRef}
            className="hidden"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                alert(`Video selected: ${e.target.files[0].name}`);
              }
            }}
          />
        </div>

       
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/postproperty4")}
            className="px-7 py-2.5 bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/postproperty6")}
            className="px-9 py-2.5 bg-teal-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
          >
            Save & Continue
          </button>
        </div>
      </div>

     
      {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            
            <div className="flex justify-between items-center mb-4 text-white">
              <h3 className="text-xl font-bold">
                {cameraMode === "photo" ? "Take Photo" : "Record Video"}
              </h3>
              <button
                onClick={closeCamera}
                className="p-2 hover:bg-white/20 rounded-full"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

           
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                ref={cameraVideoRef}
                autoPlay
                playsInline
                muted={cameraMode === "photo"}
                className="w-full h-[50vh] sm:h-[60vh] object-cover"
              />

              
              {isRecording && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Recording...</span>
                </div>
              )}
            </div>

           
            <div className="flex justify-center gap-4 mt-6">
              {cameraMode === "photo" ? (
                <button
                  onClick={capturePhoto}
                  className="p-4 bg-white rounded-full hover:scale-110 transition"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-gray-300 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full"></div>
                  </div>
                </button>
              ) : (
                <>
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">Start</span>
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={stopRecording}
                      className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">Stop</span>
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>

           
            <div className="text-center text-gray-300 mt-4">
              <p className="text-sm">
                {cameraMode === "photo"
                  ? "Point the camera and click the button to capture"
                  : isRecording
                  ? "Recording in progress... Click stop when done"
                  : "Click start to begin recording"}
              </p>
            </div>

           
            <div className="flex justify-center mt-6">
              <button
                onClick={closeCamera}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostProperty5;
