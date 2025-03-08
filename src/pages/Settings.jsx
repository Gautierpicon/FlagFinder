import ThemeSettings from '../components/Settings/Theme/ThemeSettings';
import TimerSettings from '../components/Settings/Timer/TimerSettings';

const Settings = () => {
  return (
    <div className='flex flex-col items-center p-4 min-h-[calc(100vh-4.75rem)] bg-gray-100 dark:bg-gray-900'>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Paramètres</h1>
      <div className="flex flex-col items-center gap-6 p-4">
        <ThemeSettings />
        <TimerSettings />
      </div>
    </div>
  );
};

export default Settings;