"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CustomMultiSelect from "@/components/CustomMultiSelect";
import { Upload, Star, Users, MapPin, DollarSign, Languages, Category } from "lucide-react";

// Sample dropdown options
const categories = ["Singer", "Dancer", "DJ", "Speaker", "Host"];
const languages = ["English", "Hindi", "Punjabi", "Bengali"];
const feeRanges = ["Free", "Under ₹5k", "₹5k - ₹15k", "₹15k+"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed().notRequired(),
});

export default function ArtistOnboardingForm() {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      image: null,
    },
  });

  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    console.log("Submitted Artist Data:", data);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c0b0e] via-[#5b0f12] to-[#b5151b] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Artist Onboarding
          </h1>
          <p className="text-xl text-gray-300">
            Join our platform and showcase your talent to the world
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 space-y-8 shadow-2xl"
        >
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <Users className="w-5 h-5" />
              Full Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input 
                  {...field} 
                  placeholder="Enter your full name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-200 h-12 text-lg"
                />
              )}
            />
            {errors.name && <p className="text-red-400 text-sm font-medium">{errors.name.message}</p>}
          </div>

          {/* Bio Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <Star className="w-5 h-5" />
              Artist Bio
            </label>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <Textarea 
                  {...field} 
                  placeholder="Tell us about your artistic journey and what makes you unique..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-200 min-h-[120px] text-lg resize-none"
                />
              )}
            />
            {errors.bio && <p className="text-red-400 text-sm font-medium">{errors.bio.message}</p>}
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <Languages className="w-5 h-5" />
              Category
            </label>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <div className="bg-white/20 border border-white/30 rounded-lg p-4">
                  <CustomMultiSelect
                    label="Select your categories"
                    options={categories}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </div>
              )}
            />
            {errors.categories && <p className="text-red-400 text-sm font-medium">{errors.categories.message}</p>}
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <Languages className="w-5 h-5" />
              Languages Spoken
            </label>
            <div className="bg-white/20 border border-white/30 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                {languages.map((item) => (
                  <Controller
                    key={item}
                    name="languages"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <Checkbox
                          checked={field.value.includes(item)}
                          onCheckedChange={(checked) => {
                            const updated = checked
                              ? [...field.value, item]
                              : field.value.filter((v) => v !== item);
                            field.onChange(updated);
                          }}
                          className="border-white/50 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                        />
                        <span className="text-white group-hover:text-purple-300 transition-colors duration-200 font-medium">
                          {item}
                        </span>
                      </label>
                    )}
                  />
                ))}
              </div>
            </div>
            {errors.languages && <p className="text-red-400 text-sm font-medium">{errors.languages.message}</p>}
          </div>

          {/* Fee Range */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <DollarSign className="w-5 h-5" />
              Fee Range
            </label>
            <Controller
              name="feeRange"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white h-12 text-lg">
                    <SelectValue placeholder="Select your fee range" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2c0b0e] border-white/30">
                    {feeRanges.map((fee) => (
                      <SelectItem 
                        key={fee} 
                        value={fee}
                        className="text-white hover:bg-white/20 focus:bg-white/20"
                      >
                        {fee}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.feeRange && <p className="text-red-400 text-sm font-medium">{errors.feeRange.message}</p>}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <MapPin className="w-5 h-5" />
              Location
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Input 
                  {...field} 
                  placeholder="Enter your city/location" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-200 h-12 text-lg"
                />
              )}
            />
            {errors.location && <p className="text-red-400 text-sm font-medium">{errors.location.message}</p>}
          </div>

          {/* Profile Image Upload */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-white font-semibold text-lg">
              <Upload className="w-5 h-5" />
              Profile Image (Optional)
            </label>
            <div className="bg-white/20 border-2 border-dashed border-white/30 rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-200">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImage}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {preview ? (
                  <div className="space-y-4">
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-white/50" 
                    />
                    <p className="text-white">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 mx-auto text-white/70" />
                    <div>
                      <p className="text-white font-medium">Click to upload your profile picture</p>
                      <p className="text-gray-300 text-sm">JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Join as an Artist
          </Button>
        </form>
      </div>
    </div>
  );
}