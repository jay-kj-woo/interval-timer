import { useNavigate, useParams } from 'react-router';
import { TimerStorageClient } from '../utils/timerStorageClient';

import Timer from '../components/Timer';

const TimerPage = () => {
  const { timerId } = useParams();
  const navigate = useNavigate();
  if (!timerId) {
    navigate('/');
    return null;
  }

  const timerConfig = TimerStorageClient.getTimer(+timerId);

  return <Timer timerConfig={timerConfig} />;
};

export default TimerPage;
