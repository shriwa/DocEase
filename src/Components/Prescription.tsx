import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const Prescription: React.FC = () => {
  const [medications, setMedications] = useState([{ id: 1, name: "", strength: "", frequency: "" }]);

  const addMoreMedications = () => {
    setMedications([...medications, { id: medications.length + 1, name: "", strength: "", frequency: "" }]);
  };

  const deleteMedication = (index: number) => {
    const updatedMedications = medications.filter((_, medIndex) => medIndex !== index);
    setMedications(updatedMedications);
  };

  const handleMedicationChange = (index: number, field: string, value: string) => {
    const updatedMedications = [...medications];
    updatedMedications[index] = { ...updatedMedications[index], [field]: value };
    setMedications(updatedMedications);
  };

  //ReCaptcha
  const [capVal, setCapVal] = useState<string | null>(null);

   
  return (
    <form className="max-w-lg mx-auto p-6 mt-4 mb-4 bg-white rounded-lg shadow-md">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-center">Medical Prescription Form</h1>

      {/* Patient's Information */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="first-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="last-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

      <div className=" flex items-center justify-start gap-2">
      <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
    </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Treatment</label>
          <input
            type="text"
            name="treatment"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Medications */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Rx: Medication / Strength / Frequency</label>
        {medications.map((medication, index) => (
          <div key={medication.id} className="mt-4 space-y-2 flex justify-center items-start gap-3">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Medication"
                value={medication.name}
                onChange={(e) => handleMedicationChange(index, "name", e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Strength"
                value={medication.strength}
                onChange={(e) => handleMedicationChange(index, "strength", e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Frequency"
                value={medication.frequency}
                onChange={(e) => handleMedicationChange(index, "frequency", e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            <div className="">
            <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme='red'  size='xs'onClick={()=> deleteMedication(index)}>
            <CloseIcon/>
            </Button>
            </Stack>
            </div>

          </div>
        ))}

        <Stack spacing={4} mt={4} direction='row' flex="center" justify="center" align='center'>
        <Button colorScheme='teal' size='xs'onClick={addMoreMedications}>
        <AddIcon/>
        </Button>
      </Stack>
      </div>

      {/* Date Signed */}
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="datetime-local"
          name="date-signed"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Physician's Signature */}
      {/* <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Physician's Signature</label>
        <input
          type="text"
          placeholder="Sign here"
          name="physician-signature"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div> */}

      {/* reCAPTCHA */}
      <div className="mt-6 ">
        <label className="block text-sm font-medium text-gray-700">Verification</label>
        <ReCAPTCHA
  sitekey="6LeH4EcqAAAAAOHPz4A88VJWyqKTuingEvnZ4STt"
  onChange={(val) => setCapVal(val)}
/>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
      <Stack direction='row' flex="center" align="center" justify="center" spacing={4}>
        <Button
        // isLoading
        // loadingText='Submitting'
        colorScheme='teal'
        variant='solid'
        isDisabled={!capVal}
        >
        Submit
      </Button>
    </Stack>
      </div>
    </form>
  );
};

export default Prescription;
