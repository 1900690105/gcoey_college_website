import React from "react";

export default function SettingsPreferences() {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Settings/Preferences</h2>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-medium">Account Settings</p>
          <p className="text-gray-600">
            Manage your password, email, and other personal settings.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-medium">Notification Preferences</p>
          <p className="text-gray-600">Customize your notification settings.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-medium">Privacy Settings</p>
          <p className="text-gray-600">
            Control who can see your profile and activities.
          </p>
        </div>
      </div>
    </div>
  );
}
