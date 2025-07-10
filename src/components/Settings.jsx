import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const InputField = ({
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
  <div className="relative">
    <input
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
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
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

  const [profileImage, setProfileImage] = useState(user?.image || '');

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
      setProfileImage(user.image || '');
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
        image: imageUrl,
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
      image: profileImage,
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
        <form onSubmit={onSubmitHandler} className="space-y-3 text-sm">
          <p className="text-xl font-semibold mb-4">Personal Information</p>
          <div className="grid grid-cols-3 gap-4">
            <InputField handleChange={handleChange} value={address.lastName} name="lastName" type="text" placeholder="Last Name" />
            <InputField handleChange={handleChange} value={address.firstName} name="firstName" type="text" placeholder="First Name" />
            <InputField handleChange={handleChange} value={address.middleName} name="middleName" type="text" placeholder="Middle Name" required={false} />
          </div>

          <InputField handleChange={handleChange} value={address.email} name="email" type="email" placeholder="Email" />
          <InputField handleChange={handleChange} value={address.phone} name="phone" type="text" placeholder="Phone" />

          <p className="text-xl font-semibold mb-4">Billing Address</p>
          <InputField handleChange={handleChange} value={address.street} name="street" type="text" placeholder="Street Address" />
          <div className="grid grid-cols-3 gap-4">
            <InputField handleChange={handleChange} value={address.city} name="city" type="text" placeholder="City" />
            <InputField handleChange={handleChange} value={address.state} name="state" type="text" placeholder="State" />
            <InputField handleChange={handleChange} value={address.zipcode} name="zipcode" type="number" placeholder="Zipcode" required={false} />
          </div>

          <button type="submit" className="w-full bg-primary mt-4 py-2 text-white hover:bg-primary-dull rounded-full uppercase">
            Save Info
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
            className="w-full bg-primary mt-4 py-2 text-white hover:bg-primary-dull rounded-full uppercase"
          >
            Edit Info
          </button>
        </div>
      )}

      {/* Password Section */}
      <form onSubmit={onSubmitControler} className="mt-10 space-y-4">
        <p className="text-xl font-semibold">Change Password</p>
        <InputField
          handleChange={handleChange}
          value={password.password}
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Current Password"
          icon={showPassword ? <FaEyeSlash /> : <FaEye />}
          toggleIcon={() => setShowPassword(!showPassword)}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            value={password.newPassword}
            name="newPassword"
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New Password"
            icon={showNewPassword ? <FaEyeSlash /> : <FaEye />}
            toggleIcon={() => setShowNewPassword(!showNewPassword)}
          />
          <InputField
            handleChange={handleChange}
            value={password.confirmPassword}
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            toggleIcon={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>

        <div className="flex justify-between">
          <button type="submit" className="bg-primary py-2 px-4 text-white rounded-full hover:bg-primary-dull">
            Change Password
          </button>
          {submittedPassword && (
            <button onClick={handleResetPassword} type="button" className="text-red-500 underline">
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
