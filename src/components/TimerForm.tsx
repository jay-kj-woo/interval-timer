import {
  CheckIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  CreateIntervalTimer,
  IntervalTimer,
  UpdateIntervalTimer,
} from '../types/IntervalTimer';

type Props =
  | {
      existingConfig: IntervalTimer;
      onCancel: () => void;
      onSave: (newConfig: UpdateIntervalTimer) => void;
      type: 'edit';
      onDelete: (id: number) => void;
    }
  | {
      onCancel: () => void;
      onSave: (newConfig: CreateIntervalTimer) => void;
      type: 'create';
    };

const TimerForm = (props: Props) => {
  const { onCancel, onSave, type } = props;
  const [newConfig, setNewConfig] = useState<
    CreateIntervalTimer | UpdateIntervalTimer
  >(
    type === 'edit'
      ? props.existingConfig
      : {
          name: '',
          highIntensity: 0,
          lowIntensity: 0,
          rounds: 0,
        }
  );

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewConfig((prevConfig) => ({
      ...(prevConfig || {}),
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === 'edit') {
      onSave(newConfig as UpdateIntervalTimer);
    } else {
      onSave(newConfig as CreateIntervalTimer);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-80">
        <div className="flex portrait:flex-col landscape:flex-row gap-2">
          <label htmlFor="name" className="text-slate-800">
            Name
          </label>
          <input
            className="border border-purple-800 rounded-md p-1 pl-4"
            type="text"
            value={newConfig?.name}
            name="name"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex portrait:flex-col landscape:flex-row gap-2">
          <label htmlFor="highIntensity">High Intensity</label>
          <input
            className="border border-purple-800 rounded-md p-1 pl-4"
            type="number"
            value={newConfig?.highIntensity}
            name="highIntensity"
            min={1}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex portrait:flex-col landscape:flex-row gap-2">
          <label htmlFor="lowIntensity">Low Intensity</label>
          <input
            className="border border-purple-800 rounded-md p-1 pl-4"
            type="number"
            value={newConfig?.lowIntensity}
            name="lowIntensity"
            required
            min={1}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex portrait:flex-col landscape:flex-row gap-2">
          <label htmlFor="rounds">Rounds</label>
          <input
            className="border border-purple-800 rounded-md p-1 pl-4"
            type="number"
            value={newConfig?.rounds}
            name="rounds"
            min={1}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2
          border border-purple-800 rounded-md px-4 py-2"
          >
            <XMarkIcon className="w-4 h-4" />
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2
          border border-yellow-400 bg-yellow-400 rounded-md px-4 py-2"
          >
            {type === 'edit' ? (
              <>
                <CheckIcon className="w-4 h-4" />
                Save
              </>
            ) : (
              <>
                <PlusIcon className="w-4 h-4" />
                Add Timer
              </>
            )}
          </button>
        </div>
        {type === 'edit' && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => props.onDelete(props.existingConfig.id)}
              className="flex items-center gap-2 w-full justify-center text-white
          border border-red-500 bg-red-500 rounded-md px-4 py-2"
            >
              <TrashIcon className="w-4 h-4" />
              Delete Timer
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default TimerForm;
