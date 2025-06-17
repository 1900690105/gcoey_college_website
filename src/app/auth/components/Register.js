import { useState } from "react";
import {
  User,
  MapPin,
  BookOpen,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  options,
  placeholder,
  className = "",
}) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && "*"}
    </label>
    {type === "select" ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">{placeholder || `Select ${label}`}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        rows="2"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const FileUpload = ({ label, id, onChange, file }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
      <input
        type="file"
        accept={id.includes("Certificate") ? ".pdf,.jpg,.jpeg,.png" : "image/*"}
        onChange={onChange}
        className="hidden"
        id={id}
      />
      <label htmlFor={id} className="cursor-pointer">
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600">
          Click to upload {label.toLowerCase()}
        </p>
        {file && <p className="text-xs text-green-600 mt-1">{file.name}</p>}
      </label>
    </div>
  </div>
);

const ProgressBar = ({ steps, currentStep }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
              index + 1 <= currentStep
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">{step}</span>
          {index < steps.length - 1 && (
            <div
              className={`w-20 h-1 mx-4 ${
                index + 1 < currentStep ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

const SuccessModal = ({ isOpen, onClose, studentId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h2>
        <p className="text-gray-600 mb-2">
          Your registration has been submitted successfully.
        </p>
        <p className="text-sm text-gray-500 mb-6">Student ID: {studentId}</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    // Personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    nationality: "",
    religion: "",
    category: "",
    // Address
    permanentAddress: {
      street: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
    currentAddress: {
      street: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
    sameAsPermanent: false,
    // Academic
    course: "",
    branch: "",
    semester: "",
    admissionYear: "",
    previousEducation: {
      schoolName: "",
      board: "",
      percentage: "",
      passingYear: "",
    },
    // Guardian
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    // Documents & Login
    photo: null,
    signature: null,
    documents: {
      tenthCertificate: null,
      twelfthCertificate: null,
      transferCertificate: null,
      migrationCertificate: null,
    },
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [studentId, setStudentId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (name === "sameAsPermanent" && checked) {
        setFormData((prev) => ({
          ...prev,
          currentAddress: { ...prev.permanentAddress },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (fieldName.includes(".")) {
      const [parent, child] = fieldName.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: file },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [fieldName]: file }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    const required = {
      1: ["firstName", "lastName", "email", "phone", "dateOfBirth"],
      2: ["permanentAddress.street", "permanentAddress.city"],
      3: ["course", "branch"],
      5: ["password"],
    };

    required[step]?.forEach((field) => {
      const value = field.includes(".")
        ? formData[field.split(".")[0]][field.split(".")[1]]
        : formData[field];
      if (!value)
        newErrors[field] = `${field
          .replace(/([A-Z])/g, " $1")
          .toLowerCase()} is required`;
    });

    if (step === 5 && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Email validation
    if (step === 1 && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Phone validation
    if (step === 1 && formData.phone) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    if (step === 2 && formData.currentAddress.pincode) {
      const phoneRegex = /^[0-9]{6}$/;
      if (
        !phoneRegex.test(formData.currentAddress.pincode.replace(/\D/g, ""))
      ) {
        newErrors.pincode = "Please enter a valid 6-digit Pin Code";
      }
    }
    if (step === 2 && formData.permanentAddress.pincode) {
      const phoneRegex = /^[0-9]{6}$/;
      if (
        !phoneRegex.test(formData.permanentAddress.pincode.replace(/\D/g, ""))
      ) {
        newErrors.pincode = "Please enter a valid 6-digit Pin Code";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () =>
    validateStep(currentStep) &&
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      // Create FormData for file upload
      const submitData = new FormData();

      // Add text data
      Object.keys(formData).forEach((key) => {
        if (
          key === "permanentAddress" ||
          key === "currentAddress" ||
          key === "previousEducation"
        ) {
          Object.keys(formData[key]).forEach((subKey) => {
            submitData.append(`${key}.${subKey}`, formData[key][subKey] || "");
          });
        } else if (key === "documents") {
          Object.keys(formData[key]).forEach((docKey) => {
            if (formData[key][docKey]) {
              submitData.append(docKey, formData[key][docKey]);
            }
          });
        } else if (key === "photo" || key === "signature") {
          if (formData[key]) {
            submitData.append(key, formData[key]);
          }
        } else if (key !== "confirmPassword") {
          submitData.append(key, formData[key] || "");
        }
      });

      const response = await fetch("/api/student/register", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setStudentId(result.studentId);
        setShowSuccess(true);
      } else {
        setErrors({ submit: result.message });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    "Personal Info",
    "Address",
    "Academic Info",
    "Guardian Info",
    "Documents & Login",
  ];

  const options = {
    religion: [
      { value: "", label: "Select Religion" },
      { value: "hinduism", label: "Hinduism" },
      { value: "islam", label: "Islam" },
      { value: "christianity", label: "Christianity" },
      { value: "sikhism", label: "Sikhism" },
      { value: "buddhism", label: "Buddhism" },
      { value: "jainism", label: "Jainism" },
      { value: "zoroastrianism", label: "Zoroastrianism (Parsi)" },
      { value: "judaism", label: "Judaism" },
      { value: "other", label: "Other" },
    ],

    gender: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    bloodGroup: [
      { value: "A+", label: "A+" },
      { value: "A-", label: "A-" },
      { value: "B+", label: "B+" },
      { value: "B-", label: "B-" },
      { value: "AB+", label: "AB+" },
      { value: "AB-", label: "AB-" },
      { value: "O+", label: "O+" },
      { value: "O-", label: "O-" },
    ],
    category: [
      { value: "general", label: "General" },
      { value: "obc", label: "OBC" },
      { value: "sc", label: "SC" },
      { value: "st", label: "ST" },
    ],
    course: [
      { value: "btech", label: "B.Tech" },
      { value: "mtech", label: "M.Tech" },
      { value: "bsc", label: "B.Sc" },
      { value: "msc", label: "M.Sc" },
      { value: "bca", label: "BCA" },
      { value: "mca", label: "MCA" },
      { value: "bba", label: "BBA" },
      { value: "mba", label: "MBA" },
    ],
    branch: [
      { value: "cse", label: "Computer Science Engineering" },
      { value: "it", label: "Information Technology" },
      { value: "ece", label: "Electronics & Communication" },
      { value: "mechanical", label: "Mechanical Engineering" },
      { value: "civil", label: "Civil Engineering" },
      { value: "electrical", label: "Electrical Engineering" },
    ],
    semester: Array.from({ length: 8 }, (_, i) => ({
      value: (i + 1).toString(),
      label: `${i + 1}${["st", "nd", "rd"][i] || "th"} Semester`,
    })),
    admissionYear: [
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
    ],
    nationality: [
      { value: "india", label: "Indian" },
      { value: "other", label: "Other" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Student Registration
          </h1>
          <p className="text-gray-600">
            Complete your registration to join our college
          </p>
        </div>

        <ProgressBar steps={steps} currentStep={currentStep} />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Global Error Message */}
            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <p className="text-red-700">{errors.submit}</p>
              </div>
            )}

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Personal Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    required
                    placeholder="Enter your first name"
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    required
                    placeholder="Enter your last name"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                    placeholder="Enter your email"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    required
                    placeholder="Enter your phone number"
                  />
                  <FormField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    error={errors.dateOfBirth}
                    required
                  />
                  <FormField
                    label="Gender"
                    name="gender"
                    type="select"
                    value={formData.gender}
                    onChange={handleInputChange}
                    options={options.gender}
                  />
                  <FormField
                    label="Blood Group"
                    name="bloodGroup"
                    type="select"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    options={options.bloodGroup}
                  />
                  <FormField
                    label="Nationality"
                    name="nationality"
                    type="select"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    options={options.nationality}
                  />
                  <FormField
                    label="Religion"
                    name="religion"
                    type="select"
                    value={formData.religion}
                    onChange={handleInputChange}
                    options={options.religion}
                  />
                  <FormField
                    label="Category"
                    name="category"
                    type="select"
                    value={formData.category}
                    onChange={handleInputChange}
                    options={options.category}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Address Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Address Information
                  </h2>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Permanent Address
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Street Address"
                      name="permanentAddress.street"
                      type="textarea"
                      value={formData.permanentAddress.street}
                      onChange={handleInputChange}
                      error={errors["permanentAddress.street"]}
                      required
                      placeholder="Enter your permanent address"
                      className="md:col-span-2"
                    />
                    <FormField
                      label="City"
                      name="permanentAddress.city"
                      value={formData.permanentAddress.city}
                      onChange={handleInputChange}
                      error={errors["permanentAddress.city"]}
                      required
                      placeholder="City"
                    />
                    <FormField
                      label="State"
                      name="permanentAddress.state"
                      value={formData.permanentAddress.state}
                      onChange={handleInputChange}
                      placeholder="State"
                    />
                    <FormField
                      label="PIN Code"
                      name="permanentAddress.pincode"
                      value={formData.permanentAddress.pincode}
                      onChange={handleInputChange}
                      error={errors.pincode}
                      placeholder="PIN Code"
                    />
                    <FormField
                      label="Country"
                      name="permanentAddress.country"
                      value={formData.permanentAddress.country}
                      onChange={handleInputChange}
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Current Address
                    </h3>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="sameAsPermanent"
                        checked={formData.sameAsPermanent}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        Same as permanent address
                      </span>
                    </label>
                  </div>

                  {!formData.sameAsPermanent && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        label="Street Address"
                        name="currentAddress.street"
                        type="textarea"
                        value={formData.currentAddress.street}
                        onChange={handleInputChange}
                        placeholder="Enter your current address"
                        className="md:col-span-2"
                      />
                      <FormField
                        label="City"
                        name="currentAddress.city"
                        value={formData.currentAddress.city}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                      <FormField
                        label="State"
                        name="currentAddress.state"
                        value={formData.currentAddress.state}
                        onChange={handleInputChange}
                        placeholder="State"
                      />
                      <FormField
                        label="PIN Code"
                        name="currentAddress.pincode"
                        value={formData.currentAddress.pincode}
                        error={errors.pincode}
                        onChange={handleInputChange}
                        placeholder="PIN Code"
                      />
                      <FormField
                        label="Country"
                        name="currentAddress.country"
                        value={formData.currentAddress.country}
                        onChange={handleInputChange}
                        placeholder="Country"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Academic Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Academic Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Course"
                    name="course"
                    type="select"
                    value={formData.course}
                    onChange={handleInputChange}
                    error={errors.course}
                    required
                    options={options.course}
                  />
                  <FormField
                    label="Branch/Specialization"
                    name="branch"
                    type="select"
                    value={formData.branch}
                    onChange={handleInputChange}
                    error={errors.branch}
                    required
                    options={options.branch}
                  />
                  <FormField
                    label="Semester"
                    name="semester"
                    type="select"
                    value={formData.semester}
                    onChange={handleInputChange}
                    options={options.semester}
                  />
                  <FormField
                    label="Admission Year"
                    name="admissionYear"
                    type="select"
                    value={formData.admissionYear}
                    onChange={handleInputChange}
                    options={options.admissionYear}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Previous Education (12th/Intermediate)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="School/College Name"
                      name="previousEducation.schoolName"
                      value={formData.previousEducation.schoolName}
                      onChange={handleInputChange}
                      placeholder="School/College name"
                    />
                    <FormField
                      label="Board/University"
                      name="previousEducation.board"
                      value={formData.previousEducation.board}
                      onChange={handleInputChange}
                      placeholder="Board/University"
                    />
                    <FormField
                      label="Percentage/CGPA"
                      name="previousEducation.percentage"
                      value={formData.previousEducation.percentage}
                      onChange={handleInputChange}
                      placeholder="Percentage or CGPA"
                    />
                    <FormField
                      label="Passing Year"
                      name="previousEducation.passingYear"
                      value={formData.previousEducation.passingYear}
                      onChange={handleInputChange}
                      placeholder="Passing year"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Guardian Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Guardian Information
                  </h2>
                </div>

                {[
                  { title: "Father's Information", prefix: "father" },
                  { title: "Mother's Information", prefix: "mother" },
                  {
                    title: "Guardian Information (if different from parents)",
                    prefix: "guardian",
                    additional: "guardianRelation",
                  },
                ].map(({ title, prefix, additional }) => (
                  <div key={prefix}>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      {title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        label={`${
                          prefix === "guardian"
                            ? "Guardian's"
                            : prefix.charAt(0).toUpperCase() +
                              prefix.slice(1) +
                              "'s"
                        } Name`}
                        name={`${prefix}Name`}
                        value={formData[`${prefix}Name`]}
                        onChange={handleInputChange}
                        placeholder={`${prefix}'s name`}
                      />
                      {additional ? (
                        <FormField
                          label="Relation"
                          name={additional}
                          value={formData[additional]}
                          onChange={handleInputChange}
                          placeholder="Relation to student"
                        />
                      ) : (
                        <FormField
                          label="Occupation"
                          name={`${prefix}Occupation`}
                          value={formData[`${prefix}Occupation`]}
                          onChange={handleInputChange}
                          placeholder={`${prefix}'s occupation`}
                        />
                      )}
                      <FormField
                        label="Phone Number"
                        name={`${prefix}Phone`}
                        type="tel"
                        value={formData[`${prefix}Phone`]}
                        onChange={handleInputChange}
                        placeholder={`${prefix}'s phone`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 5: Documents & Login */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Upload className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Documents & Login Credentials
                  </h2>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Upload Documents
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FileUpload
                      label="Passport Photo"
                      id="photo"
                      onChange={(e) => handleFileUpload(e, "photo")}
                      file={formData.photo}
                    />
                    <FileUpload
                      label="Signature"
                      id="signature"
                      onChange={(e) => handleFileUpload(e, "signature")}
                      file={formData.signature}
                    />
                    <FileUpload
                      label="10th Certificate"
                      id="tenth"
                      onChange={(e) =>
                        handleFileUpload(e, "documents.tenthCertificate")
                      }
                      file={formData.documents.tenthCertificate}
                    />
                    <FileUpload
                      label="12th Certificate"
                      id="twelfth"
                      onChange={(e) =>
                        handleFileUpload(e, "documents.twelfthCertificate")
                      }
                      file={formData.documents.twelfthCertificate}
                    />
                    <FileUpload
                      label="Transfer Certificate"
                      id="transfer"
                      onChange={(e) =>
                        handleFileUpload(e, "documents.transferCertificate")
                      }
                      file={formData.documents.transferCertificate}
                    />
                    <FileUpload
                      label="Migration Certificate"
                      id="migration"
                      onChange={(e) =>
                        handleFileUpload(e, "documents.migrationCertificate")
                      }
                      file={formData.documents.migrationCertificate}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Create Login Credentials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["password", "confirmPassword"].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field === "password"
                            ? "Password"
                            : "Confirm Password"}{" "}
                          *
                        </label>
                        <div className="relative">
                          <input
                            type={
                              field === "password"
                                ? showPassword
                                  ? "text"
                                  : "password"
                                : showConfirmPassword
                                ? "text"
                                : "password"
                            }
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 ${
                              errors[field]
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder={
                              field === "password"
                                ? "Create a strong password"
                                : "Confirm your password"
                            }
                          />
                          <button
                            type="button"
                            onClick={() =>
                              field === "password"
                                ? setShowPassword(!showPassword)
                                : setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {(
                              field === "password"
                                ? showPassword
                                : showConfirmPassword
                            ) ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                        {errors[field] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Password Requirements:
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• At least 8 characters long</li>
                      <li>• Include uppercase and lowercase letters</li>
                      <li>• Include at least one number</li>
                      <li>• Include at least one special character</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={isSubmitting}
                >
                  ← Previous
                </button>
              )}
              <div className="ml-auto">
                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>
            Already have an account?{" "}
            <a
              href="/auth?page=login"
              className="text-blue-600 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          window.location.href = "/auth?page=Login";
        }}
        studentId={studentId}
      />
    </div>
  );
}
