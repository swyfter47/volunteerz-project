const { useState } = React;

// Icon Components
const Calendar = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const Users = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const Clock = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const Award = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

const MessageSquare = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

const DollarSign = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

const BarChart3 = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="M18 17V9"></path>
        <path d="M13 17V5"></path>
        <path d="M8 17v-3"></path>
    </svg>
);

const TrendingUp = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const VolnteerzApp = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [viewMode, setViewMode] = useState('admin');

    const stats = {
        totalVolunteers: 87,
        activeShifts: 23,
        hoursThisMonth: 406,
        valuesSaved: 10150
    };

    const clubValues = [
        { name: 'Community', percentage: 35, hours: 142 },
        { name: 'Excellence', percentage: 28, hours: 114 },
        { name: 'Inclusivity', percentage: 22, hours: 89 },
        { name: 'Dedication', percentage: 15, hours: 61 }
    ];

    const upcomingShifts = [
        { id: 1, role: 'Equipment Manager', date: '2024-12-01', time: '9:00 AM', endTime: '12:00 PM', value: 'Excellence', spots: '2/3', location: 'Main Field', volunteers: ['Sarah Chen', 'Mike Rodriguez'] },
        { id: 2, role: 'Field Setup', date: '2024-12-02', time: '7:00 AM', endTime: '9:00 AM', value: 'Community', spots: '4/6', location: 'North Complex', volunteers: ['Emma Wilson', 'John Smith'] },
        { id: 3, role: 'Coaching Assistant', date: '2024-12-03', time: '3:00 PM', endTime: '5:00 PM', value: 'Dedication', spots: '1/2', location: 'Training Center', volunteers: ['Alex Johnson'] }
    ];

    return (
        <div className="bg-gradient">
            <div className="container">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col md-flex-row items-start gap-4" style={{ justifyContent: 'space-between' }}>
                        <div>
                            <h1 className="text-3xl md-text-4xl font-bold text-gray-800 mb-2">Volnteerz Dashboard</h1>
                            <p className="text-sm md-text-base text-gray-600">Building sustainable club culture, one shift at a time</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-white rounded-lg shadow-md p-1 flex gap-1">
                                <button
                                    onClick={() => setViewMode('admin')}
                                    className={`px-3 py-2 rounded text-sm font-medium ${
                                        viewMode === 'admin' ? 'bg-blue-500 text-white' : 'text-gray-600 bg-gray-100'
                                    }`}
                                >
                                    Admin
                                </button>
                                <button
                                    onClick={() => setViewMode('volunteer')}
                                    className={`px-3 py-2 rounded text-sm font-medium ${
                                        viewMode === 'volunteer' ? 'bg-green-500 text-white' : 'text-gray-600 bg-gray-100'
                                    }`}
                                >
                                    Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                        <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Total Volunteers</p>
                                <p className="text-3xl font-bold text-gray-800">{stats.totalVolunteers}</p>
                            </div>
                            <Users size={32} />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                        <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Active Shifts</p>
                                <p className="text-3xl font-bold text-gray-800">{stats.activeShifts}</p>
                            </div>
                            <Calendar size={32} />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                        <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Hours This Month</p>
                                <p className="text-3xl font-bold text-gray-800">{stats.hoursThisMonth}</p>
                            </div>
                            <Clock size={32} />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
                        <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Value Saved</p>
                                <p className="text-3xl font-bold text-gray-800">${stats.valuesSaved.toLocaleString()}</p>
                            </div>
                            <DollarSign size={32} />
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                {viewMode === 'admin' ? (
                    <div className="bg-white rounded-xl shadow-md mb-8 p-2">
                        <div className="flex flex-wrap gap-2">
                            {['overview', 'calendar', 'shifts', 'finances', 'analytics'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 md-px-6 py-2 md-py-3 rounded-lg font-medium text-sm md-text-base ${
                                        activeTab === tab ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-md mb-8 p-2">
                        <div className="flex flex-wrap gap-2">
                            {['myShifts', 'browse', 'myHours'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 md-px-6 py-2 md-py-3 rounded-lg font-medium text-sm md-text-base ${
                                        activeTab === tab ? 'bg-green-500 text-white shadow-md' : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    {tab === 'myShifts' ? 'My Shifts' : 
                                     tab === 'myHours' ? 'My Hours' :
                                     tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="grid grid-cols-1 lg-grid-cols-3 gap-6">
                    <div className="lg-col-span-2 space-y-6">
                        
                        {/* Admin Overview */}
                        {viewMode === 'admin' && activeTab === 'overview' && (
                            <>
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <div className="flex items-center mb-6" style={{ justifyContent: 'space-between' }}>
                                        <h2 className="text-2xl font-bold text-gray-800">Club Values Impact</h2>
                                        <BarChart3 size={24} />
                                    </div>
                                    <div className="space-y-4">
                                        {clubValues.map((value) => (
                                            <div key={value.name}>
                                                <div className="flex mb-2" style={{ justifyContent: 'space-between' }}>
                                                    <span className="font-medium text-gray-700">{value.name}</span>
                                                    <span className="text-gray-600">{value.hours} hours ({value.percentage}%)</span>
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-3">
                                                    <div
                                                        className="bg-blue-500 h-3 rounded-full"
                                                        style={{ width: `${value.percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Shifts</h2>
                                    <div className="space-y-3">
                                        {upcomingShifts.map((shift) => (
                                            <div key={shift.id} className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800">{shift.role}</h3>
                                                        <p className="text-sm text-gray-600">{new Date(shift.date).toLocaleDateString()} at {shift.time}</p>
                                                    </div>
                                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                                        {shift.value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Volunteer My Shifts */}
                        {viewMode === 'volunteer' && activeTab === 'myShifts' && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">My Upcoming Shifts</h2>
                                <div className="space-y-3">
                                    {upcomingShifts.filter(s => s.volunteers.includes('Sarah Chen')).map((shift) => (
                                        <div key={shift.id} className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
                                            <h3 className="font-bold text-gray-800 text-lg mb-2">{shift.role}</h3>
                                            <div className="space-y-1 text-sm text-gray-600 mb-4">
                                                <p className="flex items-center gap-2">
                                                    <Calendar size={16} />
                                                    {new Date(shift.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <Clock size={16} />
                                                    {shift.time} - {shift.endTime}
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <span>📍</span>
                                                    {shift.location}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                                                    Check In
                                                </button>
                                                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                                                    Drop Out
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Volunteer My Hours */}
                        {viewMode === 'volunteer' && activeTab === 'myHours' && (
                            <div className="bg-gradient-purple rounded-xl shadow-md p-6 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <Award size={32} />
                                    <div>
                                        <h3 className="text-2xl font-bold">Your Progress</h3>
                                        <p className="text-purple-100 text-sm">You have logged 14 hours this month.</p> 
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-800">Announcements</h3>
                            <p className="text-gray-600 text-sm mt-2">New shifts posted daily! Check the calendar tab.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// CRITICAL: This line initializes the application
ReactDOM.render(<VolnteerzApp />, document.getElementById('root'));