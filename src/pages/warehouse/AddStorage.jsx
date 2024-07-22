import { useState } from "react";
import MainInput from "../../components/MainInput";
import StorageSelectDialogBox from "../../components/StorageSelectDialogBox";
import { addStorageArea } from "../../apis/api";

const AddStorage = () => {
  const [selectStorageType, setSelectStorageType] = useState(false);
  const [storageData, setStorageData] = useState({
    storageType: "",
    capacity: 0.0,
    temperature: 0.0,
    areaNumber: "",
    suitableFor: "",
    pricePerKg: 0.0
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setStorageData({ ...storageData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addStorageArea(storageData);

    if (response.status === 201) {
      window.location.href = "/warehouse/home";
    }
  };
  return (
    <div className="mt-8">
      <div className="shadow-md rounded-[1rem] px-4 py-6 bg-white">
        <div className="">
          <h3 className="text-[24px] font-[600]">Add new storage area</h3>
          <p className="text-[1.125rem] font-[500] text-brown">
            Fill in the following details to add a new storage area to your
            warehouse
          </p>
        </div>
        <div className="mt-4 w-full">
          <div className="flex w-full gap-10">
            <div className="w-full flex-1 flex flex-col gap-4">
              <div className="">
                <p className="font-[500]">Select storage type</p>
                <div
                  //   name={name}
                  //   value={value}
                  //   type={inputType ? inputType : "text"}
                  //   onChange={onChange}
                  onClick={() => setSelectStorageType(true)}
                  className={`shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] h-[6rem] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey text-[14px] text-center items-center flex justify-center cursor-pointer`}
                  //   placeholder="select"
                >
                  <p className="text-brown text-[14px] font-[500]">
                    {storageData.storageType
                      ? storageData.storageType
                      : "Select"}
                  </p>
                </div>
              </div>
              <MainInput
                heading="Enter total storage capacity(in tons)"
                placeholder="1000"
                type="number"
                name="capacity"
                value={storageData.capacity}
                onChange={handleChange}
              />
              <MainInput
                heading="Enter average temperature(in celcius)"
                placeholder="20"
                name="temperature"
                type="number"
                value={storageData.temperature}
                onChange={handleChange}
              />
              <button
                className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
                onClick={handleSubmit}
              >
                Continue
                {/* <CgPushRight className="text-[20px]" /> */}
              </button>
            </div>
            <div className="w-full flex-1 flex flex-col gap-4">
              <MainInput
                heading="Area number"
                placeholder="1000"
                name="areaNumber"
                value={storageData.areaNumber}
                onChange={handleChange}
              />
              <MainInput
                heading="Suitable for"
                placeholder="Rice, Wheat etc"
                name="suitableFor"
                value={storageData.suitableFor}
                onChange={handleChange}
              />
              <MainInput
                heading="Price per Kg of storage(for 1 month)"
                placeholder="100"
                type="number"
                name="pricePerKg"
                value={storageData.pricePerKg}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <StorageSelectDialogBox
        open={selectStorageType}
        onClose={() => setSelectStorageType(false)}
        selectStorage={(item) => {
          setStorageData({ ...storageData, storageType: item });
          setSelectStorageType(false);
        }}
      />
    </div>
  );
};

export default AddStorage;
