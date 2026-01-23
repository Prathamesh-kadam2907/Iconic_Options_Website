'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBuilding,
    faMapMarkerAlt,
    faRulerCombined,
    faRupeeSign,
    faCalendarAlt,
    faImage,
    faVideo,
    faCheckCircle,
    faArrowRight,
    faArrowLeft,
    faBed,
    faCouch,
    faCar,
    faSwimmingPool,
    faDumbbell,
    faShieldAlt,
    faElevator,
    faWifi,
    faBolt,
    faTimes,
    faPlus,
    faFileAlt,
    faUpload,
    faCheck,
    faLeaf,
    faPhone,
    faEnvelope,
    faUser,
    faChartArea,
    faStar,
    faChevronRight,
    faChevronLeft,
    faInfoCircle,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';

interface UnitType {
    id: string;
    type: string;
    totalUnits: number;
    availableUnits: number;
    carpetArea: string;
    price: string;
    pricePerSqft: string;
}

interface FormData {
    propertyType: 'residential' | 'commercial' | '';
    projectType: string;
    projectName: string;
    reraNumber: string;
    builderName: string;
    totalUnits: string;
    totalFloors: string;
    totalTowers: string;
    possessionDate: string;
    projectStatus: string;
    city: string;
    locality: string;
    address: string;
    pincode: string;
    landmark: string;
    unitTypes: UnitType[];
    amenities: string[];
    images: File[];
    videos: File[];
    brochure: File | null;
    description: string;
    highlights: string[];
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    acceptTerms: boolean;
    acceptPrivacy: boolean;
}

export default function PostPropertyPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const totalSteps = 8;

    const [formData, setFormData] = useState<FormData>({
        propertyType: '',
        projectType: '',
        projectName: '',
        reraNumber: '',
        builderName: '',
        totalUnits: '',
        totalFloors: '',
        totalTowers: '',
        possessionDate: '',
        projectStatus: '',
        city: '',
        locality: '',
        address: '',
        pincode: '',
        landmark: '',
        unitTypes: [],
        amenities: [],
        images: [],
        videos: [],
        brochure: null,
        description: '',
        highlights: [],
        contactPerson: '',
        contactEmail: '',
        contactPhone: '',
        acceptTerms: false,
        acceptPrivacy: false,
    });

    const [newHighlight, setNewHighlight] = useState('');

    const residentialTypes = [
        { id: 'apartment', name: 'Apartment/Flat', icon: faBuilding, color: 'text-blue-500' },
        { id: 'villa', name: 'Villa/Bungalow', icon: faHome, color: 'text-teal-500' },
        { id: 'penthouse', name: 'Penthouse', icon: faBuilding, color: 'text-purple-500' },
        { id: 'plotted', name: 'Plotted Development', icon: faLeaf, color: 'text-green-500' },
    ];

    const commercialTypes = [
        { id: 'office', name: 'Office Space', icon: faBuilding, color: 'text-indigo-500' },
        { id: 'retail', name: 'Retail Shop', icon: faBuilding, color: 'text-orange-500' },
        { id: 'warehouse', name: 'Warehouse', icon: faBuilding, color: 'text-gray-600' },
        { id: 'coworking', name: 'Co-working Space', icon: faBuilding, color: 'text-pink-500' },
        { id: 'itpark', name: 'IT Park', icon: faBuilding, color: 'text-cyan-500' },
    ];

    const projectStatuses = ['Under Construction', 'Ready to Move', 'New Launch', 'Upcoming'];

    const amenitiesList = [
        { id: 'parking', name: 'Parking', icon: faCar, color: 'bg-blue-100 text-blue-600' },
        { id: 'pool', name: 'Swimming Pool', icon: faSwimmingPool, color: 'bg-cyan-100 text-cyan-600' },
        { id: 'gym', name: 'Gymnasium', icon: faDumbbell, color: 'bg-red-100 text-red-600' },
        { id: 'security', name: '24x7 Security', icon: faShieldAlt, color: 'bg-green-100 text-green-600' },
        { id: 'elevator', name: 'Lift/Elevator', icon: faElevator, color: 'bg-purple-100 text-purple-600' },
        { id: 'wifi', name: 'Wi-Fi', icon: faWifi, color: 'bg-indigo-100 text-indigo-600' },
        { id: 'powerbackup', name: 'Power Backup', icon: faBolt, color: 'bg-yellow-100 text-yellow-600' },
        { id: 'garden', name: 'Garden/Park', icon: faLeaf, color: 'bg-emerald-100 text-emerald-600' },
        { id: 'clubhouse', name: 'Club House', icon: faCouch, color: 'bg-rose-100 text-rose-600' },
    ];

    const unitTypeOptions = ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', 'Penthouse', 'Studio', 'Office Space', 'Retail Shop', 'Showroom'];

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = () => {
        setShowSuccess(true);
        console.log('Form Data:', formData);
    };

    const addUnitType = () => {
        const newUnit: UnitType = {
            id: Date.now().toString(),
            type: '',
            totalUnits: 0,
            availableUnits: 0,
            carpetArea: '',
            price: '',
            pricePerSqft: '',
        };
        setFormData({ ...formData, unitTypes: [...formData.unitTypes, newUnit] });
    };

    const removeUnitType = (id: string) => {
        setFormData({ ...formData, unitTypes: formData.unitTypes.filter((unit) => unit.id !== id) });
    };

    const updateUnitType = (id: string, field: string, value: any) => {
        setFormData({
            ...formData,
            unitTypes: formData.unitTypes.map((unit) => (unit.id === id ? { ...unit, [field]: value } : unit)),
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, images: [...formData.images, ...Array.from(e.target.files)] });
        }
    };

    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, videos: [...formData.videos, ...Array.from(e.target.files)] });
        }
    };

    const handleBrochureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, brochure: e.target.files[0] });
        }
    };

    const removeImage = (index: number) => {
        setFormData({ ...formData, images: formData.images.filter((_, i) => i !== index) });
    };

    const removeVideo = (index: number) => {
        setFormData({ ...formData, videos: formData.videos.filter((_, i) => i !== index) });
    };

    const addHighlight = () => {
        if (newHighlight.trim()) {
            setFormData({ ...formData, highlights: [...formData.highlights, newHighlight] });
            setNewHighlight('');
        }
    };

    const removeHighlight = (index: number) => {
        setFormData({ ...formData, highlights: formData.highlights.filter((_, i) => i !== index) });
    };

    const toggleAmenity = (amenityId: string) => {
        if (formData.amenities.includes(amenityId)) {
            setFormData({ ...formData, amenities: formData.amenities.filter((a) => a !== amenityId) });
        } else {
            setFormData({ ...formData, amenities: [...formData.amenities, amenityId] });
        }
    };

    const getStepName = (step: number) => {
        const names = ['Type', 'Details', 'Location', 'Units', 'Amenities', 'Media', 'Info', 'Submit'];
        return names[step - 1];
    };

    const getStepIcon = (step: number) => {
        const icons = [faBuilding, faFileAlt, faMapMarkerAlt, faBed, faSwimmingPool, faImage, faInfoCircle, faCheckCircle];
        return icons[step - 1];
    };

    const renderProgressBar = () => (
        <div className="mb-8">
            <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 overflow-x-auto pb-4">
                {Array.from({ length: totalSteps }, (_, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className={`relative flex flex-col items-center`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform ${currentStep > i + 1 ? 'scale-110' : ''}`}>
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${currentStep > i + 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : currentStep === i + 1 ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`}></div>
                                    <div className="relative z-10">
                                        {currentStep > i + 1 ? (
                                            <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-white" />
                                        ) : (
                                            <FontAwesomeIcon icon={getStepIcon(i + 1)} className={`w-5 h-5 ${currentStep === i + 1 ? 'text-white' : 'text-gray-500'}`} />
                                        )}
                                    </div>
                                </div>
                                <span className={`mt-2 text-sm font-semibold transition-colors ${currentStep === i + 1 ? 'text-teal-700' : 'text-gray-600'}`}>
                                    Step {i + 1}
                                </span>
                                <span className="text-xs text-gray-500 mt-1">{getStepName(i + 1)}</span>
                            </div>
                        </div>

                        {i < totalSteps - 1 && (
                            <div className={`w-8 sm:w-12 lg:w-16 h-1 rounded-full transition-all duration-500 ${currentStep > i + 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`} />
                        )}
                    </React.Fragment>
                ))}
            </div>
            
            {/* Current Step Indicator */}
            <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full text-teal-700 font-semibold text-sm">
                    <FontAwesomeIcon icon={getStepIcon(currentStep)} className="w-4 h-4" />
                    {currentStep} of {totalSteps} • {getStepName(currentStep)}
                </span>
            </div>
        </div>
    );

    if (showSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 flex items-center justify-center p-4 md:p-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full transform transition-all duration-500">
                    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center text-white">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faCheckCircle} className="w-14 h-14 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Submitted Successfully! 🎉</h2>
                        <p className="text-lg opacity-90">Your project is now under review. We'll notify you once it's live.</p>
                    </div>

                    <div className="p-8 md:p-10">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center gap-3">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                Project Summary
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Project Name:</span>
                                    <span className="text-gray-900 font-bold">{formData.projectName}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Builder:</span>
                                    <span className="text-gray-900 font-bold">{formData.builderName}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Location:</span>
                                    <span className="text-gray-900 font-bold text-right">{formData.locality}, {formData.city}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Unit Types:</span>
                                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-bold">
                                        {formData.unitTypes.length} types
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Status:</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-bold">
                                        {formData.projectStatus}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => {
                                    setShowSuccess(false);
                                    setCurrentStep(1);
                                    setFormData({
                                        propertyType: '',
                                        projectType: '',
                                        projectName: '',
                                        reraNumber: '',
                                        builderName: '',
                                        totalUnits: '',
                                        totalFloors: '',
                                        totalTowers: '',
                                        possessionDate: '',
                                        projectStatus: '',
                                        city: '',
                                        locality: '',
                                        address: '',
                                        pincode: '',
                                        landmark: '',
                                        unitTypes: [],
                                        amenities: [],
                                        images: [],
                                        videos: [],
                                        brochure: null,
                                        description: '',
                                        highlights: [],
                                        contactPerson: '',
                                        contactEmail: '',
                                        contactPhone: '',
                                        acceptTerms: false,
                                        acceptPrivacy: false,
                                    });
                                }}
                                className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                Post Another Project
                            </button>
                            <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-8 py-4 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-semibold text-lg border border-gray-300 flex items-center justify-center gap-3">
                                <FontAwesomeIcon icon={faHome} />
                                View Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-4 md:py-8 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8 mb-6 md:mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent mb-2">
                                List Your Project
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Showcase your property to thousands of potential buyers
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 rounded-xl">
                            <FontAwesomeIcon icon={faLightbulb} className="text-teal-600" />
                            <span className="text-sm text-teal-700 font-semibold">Complete all steps to publish</span>
                        </div>
                    </div>
                </div>

                {renderProgressBar()}

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Step 1: Project Type */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Select Property Type</h2>
                                    <p className="text-gray-600 text-lg">Choose the category that best describes your project</p>
                                </div>
                                
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBuilding} className="text-teal-600" />
                                            Property Category <span className="text-red-500">*</span>
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, propertyType: 'residential', projectType: '' })}
                                                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 group ${
                                                    formData.propertyType === 'residential' 
                                                    ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-white shadow-lg' 
                                                    : 'border-gray-200 hover:border-teal-300 hover:shadow-md'
                                                }`}
                                            >
                                                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-colors ${
                                                    formData.propertyType === 'residential' 
                                                    ? 'bg-gradient-to-r from-teal-500 to-teal-600' 
                                                    : 'bg-gray-100 group-hover:bg-teal-100'
                                                }`}>
                                                    <FontAwesomeIcon icon={faHome} className={`w-7 h-7 ${
                                                        formData.propertyType === 'residential' ? 'text-white' : 'text-gray-500 group-hover:text-teal-600'
                                                    }`} />
                                                </div>
                                                <h3 className="font-bold text-xl text-gray-900 mb-2">Residential</h3>
                                                <p className="text-gray-600">Apartments, Villas, Penthouses & more</p>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, propertyType: 'commercial', projectType: '' })}
                                                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 group ${
                                                    formData.propertyType === 'commercial' 
                                                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-lg' 
                                                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                                                }`}
                                            >
                                                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-colors ${
                                                    formData.propertyType === 'commercial' 
                                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                                                    : 'bg-gray-100 group-hover:bg-blue-100'
                                                }`}>
                                                    <FontAwesomeIcon icon={faBuilding} className={`w-7 h-7 ${
                                                        formData.propertyType === 'commercial' ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'
                                                    }`} />
                                                </div>
                                                <h3 className="font-bold text-xl text-gray-900 mb-2">Commercial</h3>
                                                <p className="text-gray-600">Office, Retail, Warehouse & more</p>
                                            </button>
                                        </div>
                                    </div>

                                    {formData.propertyType && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-teal-600" />
                                                Select Project Type <span className="text-red-500">*</span>
                                            </h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                                {(formData.propertyType === 'residential' ? residentialTypes : commercialTypes).map((type) => {
                                                    const isSelected = formData.projectType === type.id;
                                                    return (
                                                        <button
                                                            key={type.id}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                                                            className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-0.5 group ${
                                                                isSelected 
                                                                ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-white shadow-md' 
                                                                : 'border-gray-200 hover:border-gray-300'
                                                            }`}
                                                        >
                                                            <FontAwesomeIcon 
                                                                icon={type.icon} 
                                                                className={`w-6 h-6 mb-2 mx-auto transition-colors ${type.color} ${
                                                                    isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                                                                }`} 
                                                            />
                                                            <p className={`text-sm font-medium transition-colors ${
                                                                isSelected ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                                                            }`}>{type.name}</p>
                                                            {isSelected && (
                                                                <div className="mt-2">
                                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-teal-600 mx-auto" />
                                                                </div>
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Project Details */}
                        {currentStep === 2 && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Project Details</h2>
                                    <p className="text-gray-600 text-lg">Fill in the essential information about your project</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { label: 'Project Name *', value: formData.projectName, onChange: (e: any) => setFormData({ ...formData, projectName: e.target.value }), placeholder: 'Enter project name' },
                                        { label: 'Builder/Developer Name *', value: formData.builderName, onChange: (e: any) => setFormData({ ...formData, builderName: e.target.value }), placeholder: 'Enter builder name' },
                                        { label: 'RERA Number', value: formData.reraNumber, onChange: (e: any) => setFormData({ ...formData, reraNumber: e.target.value }), placeholder: 'Enter RERA registration number' },
                                        { label: 'Project Status *', type: 'select', value: formData.projectStatus, onChange: (e: any) => setFormData({ ...formData, projectStatus: e.target.value }), options: projectStatuses },
                                        { label: 'Total Units *', type: 'number', value: formData.totalUnits, onChange: (e: any) => setFormData({ ...formData, totalUnits: e.target.value }), placeholder: 'Total number of units' },
                                        { label: 'Total Floors *', type: 'number', value: formData.totalFloors, onChange: (e: any) => setFormData({ ...formData, totalFloors: e.target.value }), placeholder: 'Number of floors' },
                                        { label: 'Total Towers', type: 'number', value: formData.totalTowers, onChange: (e: any) => setFormData({ ...formData, totalTowers: e.target.value }), placeholder: 'Number of towers' },
                                        { label: 'Expected Possession Date *', type: 'date', value: formData.possessionDate, onChange: (e: any) => setFormData({ ...formData, possessionDate: e.target.value }) },
                                    ].map((field, idx) => (
                                        <div key={idx} className="group">
                                            <label className="block mb-2">
                                                <span className="text-base font-semibold text-gray-900">{field.label}</span>
                                            </label>
                                            {field.type === 'select' ? (
                                                <div className="relative">
                                                    <select
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none appearance-none"
                                                    >
                                                        <option value="">Select status</option>
                                                        {field.options?.map((option) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <FontAwesomeIcon icon={faChevronRight} className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400" />
                                                </div>
                                            ) : (
                                                <input
                                                    type={field.type || 'text'}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Location */}
                        {currentStep === 3 && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Project Location</h2>
                                    <p className="text-gray-600 text-lg">Tell buyers where your project is located</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { label: 'City *', value: formData.city, onChange: (e: any) => setFormData({ ...formData, city: e.target.value }), placeholder: 'Enter city' },
                                        { label: 'Locality/Area *', value: formData.locality, onChange: (e: any) => setFormData({ ...formData, locality: e.target.value }), placeholder: 'Enter locality' },
                                        { label: 'PIN Code *', value: formData.pincode, onChange: (e: any) => setFormData({ ...formData, pincode: e.target.value }), placeholder: 'Enter PIN code' },
                                        { label: 'Nearby Landmark', value: formData.landmark, onChange: (e: any) => setFormData({ ...formData, landmark: e.target.value }), placeholder: 'Enter landmark' },
                                    ].map((field, idx) => (
                                        <div key={idx} className="group">
                                            <label className="block mb-2">
                                                <span className="text-base font-semibold text-gray-900">{field.label}</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={field.value}
                                                onChange={field.onChange}
                                                placeholder={field.placeholder}
                                                className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none"
                                            />
                                        </div>
                                    ))}
                                    <div className="md:col-span-2 group">
                                        <label className="block mb-2">
                                            <span className="text-base font-semibold text-gray-900">Full Address *</span>
                                        </label>
                                        <textarea
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            placeholder="Enter complete address"
                                            rows={4}
                                            className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Unit Configuration */}
                        {currentStep === 4 && (
                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Unit Configuration</h2>
                                        <p className="text-gray-600 text-lg">Add different unit types available in your project</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addUnitType}
                                        className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                                        <span className="font-semibold">Add Unit Type</span>
                                    </button>
                                </div>

                                {formData.unitTypes.length === 0 ? (
                                    <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-300">
                                        <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FontAwesomeIcon icon={faBed} className="w-10 h-10 text-teal-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">No unit types added yet</h3>
                                        <p className="text-gray-600 mb-6 max-w-md mx-auto">Start by adding the different unit configurations available in your project</p>
                                        <button 
                                            type="button" 
                                            onClick={addUnitType} 
                                            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            Add Your First Unit Type
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {formData.unitTypes.map((unit, index) => (
                                            <div key={unit.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 p-6 hover:border-teal-300 transition-all duration-300">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-100 to-cyan-100 flex items-center justify-center">
                                                            <FontAwesomeIcon icon={faBed} className="w-6 h-6 text-teal-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-xl text-gray-900">Unit Type {index + 1}</h3>
                                                            <p className="text-gray-600">Configure details for this unit</p>
                                                        </div>
                                                    </div>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => removeUnitType(unit.id)} 
                                                        className="w-10 h-10 rounded-full bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center hover:from-red-200 hover:to-red-100 transition-colors"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-red-600" />
                                                    </button>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                                    {[
                                                        { label: 'Unit Type *', type: 'select', value: unit.type, onChange: (e: any) => updateUnitType(unit.id, 'type', e.target.value), options: unitTypeOptions },
                                                        { label: 'Total Units *', type: 'number', value: unit.totalUnits, onChange: (e: any) => updateUnitType(unit.id, 'totalUnits', parseInt(e.target.value) || 0), placeholder: 'Total units' },
                                                        { label: 'Available Units *', type: 'number', value: unit.availableUnits, onChange: (e: any) => updateUnitType(unit.id, 'availableUnits', parseInt(e.target.value) || 0), placeholder: 'Available units' },
                                                        { label: 'Carpet Area (sq.ft) *', type: 'text', value: unit.carpetArea, onChange: (e: any) => updateUnitType(unit.id, 'carpetArea', e.target.value), placeholder: 'e.g., 1200-1500' },
                                                        { label: 'Price Range (₹) *', type: 'text', value: unit.price, onChange: (e: any) => updateUnitType(unit.id, 'price', e.target.value), placeholder: 'e.g., 75L-85L' },
                                                        { label: 'Price per sq.ft (₹)', type: 'text', value: unit.pricePerSqft, onChange: (e: any) => updateUnitType(unit.id, 'pricePerSqft', e.target.value), placeholder: 'e.g., 6000' },
                                                    ].map((field, idx) => (
                                                        <div key={idx} className="group">
                                                            <label className="block mb-2">
                                                                <span className="text-base font-semibold text-gray-900">{field.label}</span>
                                                            </label>
                                                            {field.type === 'select' ? (
                                                                <div className="relative">
                                                                    <select
                                                                        value={field.value}
                                                                        onChange={field.onChange}
                                                                        className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none appearance-none"
                                                                    >
                                                                        <option value="">Select type</option>
                                                                        {field.options?.map((option) => (
                                                                            <option key={option} value={option}>
                                                                                {option}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                    <FontAwesomeIcon icon={faChevronRight} className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400" />
                                                                </div>
                                                            ) : (
                                                                <input
                                                                    type={field.type}
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                    placeholder={field.placeholder}
                                                                    className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none"
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step 5: Amenities */}
                        {currentStep === 5 && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Project Amenities</h2>
                                    <p className="text-gray-600 text-lg">Select all amenities that make your project stand out</p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {amenitiesList.map((amenity) => {
                                        const isSelected = formData.amenities.includes(amenity.id);
                                        return (
                                            <button
                                                key={amenity.id}
                                                type="button"
                                                onClick={() => toggleAmenity(amenity.id)}
                                                className={`p-5 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 group ${
                                                    isSelected 
                                                    ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-white shadow-lg' 
                                                    : 'border-gray-200 hover:border-teal-300 hover:shadow-md'
                                                }`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center transition-colors ${
                                                    isSelected ? amenity.color.replace('bg-', 'bg-gradient-to-r from-').replace(' ', ' to-') + ' to-opacity-80' : 'bg-gray-100 group-hover:bg-teal-50'
                                                }`}>
                                                    <FontAwesomeIcon icon={amenity.icon} className={`w-6 h-6 ${
                                                        isSelected ? 'text-white' : 'text-gray-500 group-hover:text-teal-600'
                                                    }`} />
                                                </div>
                                                <p className="font-semibold text-gray-900 text-base text-center">{amenity.name}</p>
                                                {isSelected && (
                                                    <div className="mt-3">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-teal-600 mx-auto" />
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Step 6: Images & Videos */}
                        {currentStep === 6 && (
                            <div className="space-y-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Upload Media</h2>
                                    <p className="text-gray-600 text-lg">Showcase your project with images and videos</p>
                                </div>

                                {/* Images Upload */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                                            <FontAwesomeIcon icon={faImage} className="text-teal-600" />
                                            Project Images <span className="text-red-500">*</span>
                                        </h3>
                                        <span className="text-sm text-gray-500">Max 10 images, 10MB each</span>
                                    </div>
                                    
                                    <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-teal-400 transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-50 to-white">
                                        <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                                        <label htmlFor="image-upload" className="cursor-pointer block">
                                            <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <FontAwesomeIcon icon={faUpload} className="w-10 h-10 text-teal-600" />
                                            </div>
                                            <p className="text-lg font-semibold text-gray-900 mb-2">Click to upload project images</p>
                                            <p className="text-gray-600">PNG, JPG, WEBP formats supported</p>
                                        </label>
                                    </div>

                                    {formData.images.length > 0 && (
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                            {formData.images.map((img, index) => (
                                                <div key={index} className="relative group">
                                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                                                        <FontAwesomeIcon icon={faImage} className="w-10 h-10 text-gray-400" />
                                                        <span className="absolute bottom-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded-lg truncate max-w-[80%]">
                                                            {img.name}
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Videos Upload */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                                            <FontAwesomeIcon icon={faVideo} className="text-purple-600" />
                                            Project Videos
                                        </h3>
                                        <span className="text-sm text-gray-500">Max 5 videos, 50MB each</span>
                                    </div>
                                    
                                    <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-purple-400 transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-50 to-white">
                                        <input type="file" multiple accept="video/*" onChange={handleVideoUpload} className="hidden" id="video-upload" />
                                        <label htmlFor="video-upload" className="cursor-pointer block">
                                            <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <FontAwesomeIcon icon={faUpload} className="w-10 h-10 text-purple-600" />
                                            </div>
                                            <p className="text-lg font-semibold text-gray-900 mb-2">Click to upload project videos</p>
                                            <p className="text-gray-600">MP4, MOV formats supported</p>
                                        </label>
                                    </div>

                                    {formData.videos.length > 0 && (
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {formData.videos.map((vid, index) => (
                                                <div key={index} className="relative group">
                                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                                        <FontAwesomeIcon icon={faVideo} className="w-10 h-10 text-gray-400" />
                                                        <span className="absolute bottom-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded-lg truncate max-w-[80%]">
                                                            {vid.name}
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeVideo(index)}
                                                        className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Brochure Upload */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                                        <FontAwesomeIcon icon={faFileAlt} className="text-orange-600" />
                                        Project Brochure
                                    </h3>
                                    
                                    <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-orange-400 transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-50 to-white">
                                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleBrochureUpload} className="hidden" id="brochure-upload" />
                                        <label htmlFor="brochure-upload" className="cursor-pointer block">
                                            <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <FontAwesomeIcon icon={faUpload} className="w-10 h-10 text-orange-600" />
                                            </div>
                                            <p className="text-lg font-semibold text-gray-900 mb-2">Click to upload project brochure</p>
                                            <p className="text-gray-600">PDF, DOC, DOCX formats supported</p>
                                        </label>
                                    </div>

                                    {formData.brochure && (
                                        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-gray-900 text-base">{formData.brochure.name}</span>
                                                    <p className="text-sm text-gray-600">Ready to upload</p>
                                                </div>
                                            </div>
                                            <button type="button" onClick={() => setFormData({ ...formData, brochure: null })} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                                <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-red-600" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Step 7: Additional Details */}
                        {currentStep === 7 && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Additional Information</h2>
                                    <p className="text-gray-600 text-lg">Add compelling details to attract more buyers</p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block mb-3">
                                            <span className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faFileAlt} className="text-teal-600" />
                                                Project Description <span className="text-red-500">*</span>
                                            </span>
                                            <p className="text-sm text-gray-500 mt-1">Describe your project in detail, highlight unique features and benefits</p>
                                        </label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            placeholder="Describe your project in detail... Mention architecture, design philosophy, location advantages, investment potential, etc."
                                            rows={6}
                                            className="w-full px-4 py-4 text-base border-2 border-gray-300 rounded-2xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none resize-none"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block">
                                            <span className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-3">
                                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                                Project Highlights
                                            </span>
                                            <div className="flex gap-3">
                                                <input
                                                    type="text"
                                                    value={newHighlight}
                                                    onChange={(e) => setNewHighlight(e.target.value)}
                                                    placeholder="Add a highlight (e.g., 'Prime Location in City Center')"
                                                    className="flex-1 px-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none"
                                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
                                                />
                                                <button type="button" onClick={addHighlight} className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3.5 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                                                    <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                                                    Add
                                                </button>
                                            </div>
                                        </label>

                                        {formData.highlights.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {formData.highlights.map((highlight, index) => (
                                                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 group hover:border-teal-300 transition-colors">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                                                                <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-white" />
                                                            </div>
                                                            <span className="font-medium text-gray-900 text-base">{highlight}</span>
                                                        </div>
                                                        <button type="button" onClick={() => removeHighlight(index)} className="p-2 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                                            <FontAwesomeIcon icon={faTimes} className="w-4 h-4 text-red-600" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 8: Contact & Terms */}
                        {currentStep === 8 && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Contact Details & Terms</h2>
                                    <p className="text-gray-600 text-lg">Provide contact information and accept terms</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { label: 'Contact Person Name *', icon: faUser, value: formData.contactPerson, onChange: (e: any) => setFormData({ ...formData, contactPerson: e.target.value }), placeholder: 'Enter contact person name' },
                                        { label: 'Contact Email *', icon: faEnvelope, value: formData.contactEmail, onChange: (e: any) => setFormData({ ...formData, contactEmail: e.target.value }), placeholder: 'Enter email address' },
                                        { label: 'Contact Phone *', icon: faPhone, value: formData.contactPhone, onChange: (e: any) => setFormData({ ...formData, contactPhone: e.target.value }), placeholder: 'Enter phone number' },
                                    ].map((field, idx) => (
                                        <div key={idx} className="group">
                                            <label className="block mb-2">
                                                <span className="text-base font-semibold text-gray-900">{field.label}</span>
                                            </label>
                                            <div className="relative">
                                                <FontAwesomeIcon icon={field.icon} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <input
                                                    type={field.label.includes('Email') ? 'email' : field.label.includes('Phone') ? 'tel' : 'text'}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder={field.placeholder}
                                                    className="w-full pl-12 pr-4 py-3.5 text-base border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 outline-none"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-8 space-y-4">
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-200">
                                        <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center gap-2">
                                            <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600" />
                                            Terms & Conditions
                                        </h4>
                                        <div className="space-y-4">
                                            <label className="flex items-start gap-3 cursor-pointer p-3 hover:bg-white/50 rounded-xl transition-colors">
                                                <div className="relative mt-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.acceptTerms}
                                                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                                        className="w-6 h-6 text-teal-600 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer"
                                                    />
                                                    {formData.acceptTerms && (
                                                        <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
                                                    )}
                                                </div>
                                                <span className="text-gray-700 text-base">
                                                    I agree to the{' '}
                                                    <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition-colors">
                                                        Terms and Conditions
                                                    </a>{' '}
                                                    <span className="text-red-500">*</span>
                                                </span>
                                            </label>

                                            <label className="flex items-start gap-3 cursor-pointer p-3 hover:bg-white/50 rounded-xl transition-colors">
                                                <div className="relative mt-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.acceptPrivacy}
                                                        onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                                                        className="w-6 h-6 text-teal-600 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer"
                                                    />
                                                    {formData.acceptPrivacy && (
                                                        <FontAwesomeIcon icon={faCheck} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
                                                    )}
                                                </div>
                                                <span className="text-gray-700 text-base">
                                                    I have read and accept the{' '}
                                                    <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition-colors">
                                                        Privacy Policy
                                                    </a>{' '}
                                                    <span className="text-red-500">*</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
                                        <p className="text-green-800 text-base flex items-start gap-3">
                                            <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                                            <span>
                                                <strong>Important:</strong> Your project will be reviewed by our team within 24-48 hours. You will receive a confirmation email once approved. Ensure all information provided is accurate.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                disabled={currentStep === 1}
                                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center ${
                                    currentStep === 1 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                                }`}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                                Previous Step
                            </button>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium">Step {currentStep} of {totalSteps}</span>
                                <span className="text-gray-400">•</span>
                                <span>{getStepName(currentStep)}</span>
                            </div>

                            {currentStep < totalSteps ? (
                                <button 
                                    type="button" 
                                    onClick={handleNext} 
                                    className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                                >
                                    Next Step
                                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={!formData.acceptTerms || !formData.acceptPrivacy}
                                    className={`flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center ${
                                        formData.acceptTerms && formData.acceptPrivacy 
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                                    Submit Project
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}