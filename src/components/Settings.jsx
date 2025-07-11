
import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

// InputField component with labels and optional icons
const InputField = ({
  label,
  type,
  placeholder,
  name,
  handleChange,
  value,
  className,
  required = true,
  icon,
  toggleIcon
}) => (
  <div className="relative flex flex-col gap-1 text-sm">
    {label && (
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
    )}
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      value={value}
      className={`w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 outline-none focus:ring-primary pr-10 ${className || ''}`}
      required={required}
    />
    {icon && (
      <span
        className="absolute right-3 top-[38px] transform -translate-y-1/2 cursor-pointer text-gray-500"
        onClick={toggleIcon}
      >
        {icon}
      </span>
    )}
  </div>
);

export default function Settings() {
  const { user, setUser } = useAppContext();

  const [submittedAddress, setSubmittedAddress] = useState(null);
  const [submittedPassword, setSubmittedPassword] = useState(null);
  const [editingAddress, setEditingAddress] = useState(true);
  const [profileImage, setProfileImage] = useState(user?.photoURL || '');

  const [address, setAddress] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const [password, setPassword] = useState({
    password: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      const [firstName = '', middleName = '', lastName = ''] = user?.name?.split(' ') || [];
      setAddress((prev) => ({
        ...prev,
        firstName,
        middleName,
        lastName,
        email: user.email || '',
        phone: user.phone || '',
        city: user.location?.split(',')[0] || '',
        state: user.location?.split(',')[1] || '',
      }));
      setProfileImage(user.photoURL || '');
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in password) {
      setPassword((prev) => ({ ...prev, [name]: value }));
    } else {
      setAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleResetPassword = () => {
    setSubmittedPassword(null);
    setPassword({
      password: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleResetAddress = () => {
    setSubmittedAddress(null);
    setEditingAddress(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      const updatedUser = {
        ...user,
        photoURL: imageUrl,
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name: `${address.firstName} ${address.middleName} ${address.lastName}`.trim(),
      email: address.email,
      phone: address.phone,
      location: `${address.city}, ${address.state}`.trim(),
      photoURL: profileImage,
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setSubmittedAddress({ ...address });
    setEditingAddress(false);
  };

  const onSubmitControler = (e) => {
    e.preventDefault();
    setSubmittedPassword({ ...password });
  };

  return (
    <div className="p-5 md:px-10 space-y-8">
      {/* Profile Image */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={profileImage || 'https://via.placeholder.com/100'}
          alt="User"
          className="w-20 h-20 rounded-full object-cover border shadow"
        />
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="profileImageUpload"
            className="hidden"
          />
          <label
            htmlFor="profileImageUpload"
            className="text-sm text-black border border-primary px-4 py-2 rounded-full cursor-pointer hover:opacity-75"
          >
            Change Image
          </label>
        </div>
      </div>

      {/* Personal Info */}
      {editingAddress ? (
        <form onSubmit={onSubmitHandler} className="space-y-4 text-sm">
          <p className="text-xl font-semibold mb-4">Personal Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InputField label="Last Name" handleChange={handleChange} value={address.lastName} name="lastName" type="text" placeholder="Last Name" />
            <InputField label="First Name" handleChange={handleChange} value={address.firstName} name="firstName" type="text" placeholder="First Name" />
            <InputField label="Middle Name" handleChange={handleChange} value={address.middleName} name="middleName" type="text" placeholder="Middle Name" required={false} />
          </div>

          <InputField label="Email" handleChange={handleChange} value={address.email} name="email" type="email" placeholder="Enter Email" />
          <InputField label="Phone" handleChange={handleChange} value={address.phone} name="phone" type="text" placeholder="Enter Phone" />

          <p className="text-xl font-semibold mb-4">Billing Address</p>
          <InputField label="Street Address" handleChange={handleChange} value={address.street} name="street" type="text" placeholder="Street Address" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InputField label="City" handleChange={handleChange} value={address.city} name="city" type="text" placeholder="City" />
            <InputField label="State" handleChange={handleChange} value={address.state} name="state" type="text" placeholder="State" />
            <InputField label="Zipcode" handleChange={handleChange} value={address.zipcode} name="zipcode" type="number" placeholder="Zipcode" required={false} />
          </div>

          <button type="submit" className="w-fit px-4 py-1 text-sm bg-primary text-white rounded-md hover:bg-primary/90">
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          <p className="text-xl font-semibold mb-4">Saved Address</p>
          <div className="bg-gray-100 p-4 rounded-md space-y-2 text-sm">
            <div><strong>Name:</strong> {user?.name}</div>
            <div><strong>Email:</strong> {user?.email}</div>
            <div><strong>Phone:</strong> {user?.phone}</div>
            <div><strong>Location:</strong> {user?.location}</div>
          </div>
          <button
            onClick={handleResetAddress}
            className="w-fit px-4 py-1 mt-4 text-sm bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Edit Info
          </button>
        </div>
      )}

      {/* Password Section */}
      <form onSubmit={onSubmitControler} className="mt-10 space-y-4">
        <p className="text-xl font-semibold">Change Password</p>
        <InputField
          label="Current Password"
          handleChange={handleChange}
          value={password.password}
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Current Password"
          icon={showPassword ? <FaEyeSlash /> : <FaEye />}
          toggleIcon={() => setShowPassword(!showPassword)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="New Password"
            handleChange={handleChange}
            value={password.newPassword}
            name="newPassword"
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New Password"
            icon={showNewPassword ? <FaEyeSlash /> : <FaEye />}
            toggleIcon={() => setShowNewPassword(!showNewPassword)}
          />
          <InputField
            label="Confirm Password"
            handleChange={handleChange}
            value={password.confirmPassword}
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            toggleIcon={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>

        <div className="flex justify-between items-center">
          <button type="submit" className="w-fit px-4 py-1 text-sm bg-primary text-white rounded-md hover:bg-primary/90">
            Save Changes
          </button>
          {submittedPassword && (
            <button onClick={handleResetPassword} type="button" className="text-red-500 underline text-sm">
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
