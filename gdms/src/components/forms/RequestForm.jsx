import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextField, Select, MenuItem, FormControl, InputLabel,
  Button, FormHelperText
} from '@mui/material'
import { GARBAGE_TYPES } from '../../mock/data'

/**
 * Reusable pickup request form.
 * Props:
 *  - onSubmit(data): called with validated form data
 *  - defaultValues: optional pre-fill
 *  - loading: shows disabled state
 */
export default function RequestForm({ onSubmit, defaultValues = {}, loading = false }) {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      type: '',
      qty: '',
      unit: 'kg',
      priority: 'medium',
      loc: '',
      notes: '',
      ...defaultValues,
    }
  })

  const sxField = {
    '& .MuiInputBase-root': { fontFamily: 'Courier New', fontSize: '0.875rem', borderRadius: '6px' },
    '& .MuiInputLabel-root': { fontFamily: 'Courier New', fontSize: '0.8rem' },
  }

  return (
    <form onSubmit={handleSubmit(data => { onSubmit(data); reset() })} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Garbage Type */}
        <FormControl fullWidth error={!!errors.type} sx={sxField}>
          <InputLabel>Garbage Type *</InputLabel>
          <Controller
            name="type"
            control={control}
            rules={{ required: 'Select a garbage type' }}
            render={({ field }) => (
              <Select {...field} label="Garbage Type *">
                {GARBAGE_TYPES.map(t => <MenuItem key={t} value={t} sx={{ fontFamily: 'Courier New', fontSize: '0.875rem' }}>{t}</MenuItem>)}
              </Select>
            )}
          />
          {errors.type && <FormHelperText>{errors.type.message}</FormHelperText>}
        </FormControl>

        {/* Quantity */}
        <TextField
          label="Quantity *"
          type="number"
          fullWidth
          error={!!errors.qty}
          helperText={errors.qty?.message}
          sx={sxField}
          {...register('qty', { required: 'Enter quantity', min: { value: 1, message: 'Minimum 1' } })}
        />

        {/* Unit */}
        <FormControl fullWidth sx={sxField}>
          <InputLabel>Unit</InputLabel>
          <Controller
            name="unit"
            control={control}
            render={({ field }) => (
              <Select {...field} label="Unit">
                {['kg', 'tons', 'bags', 'boxes', 'units', 'litres'].map(u =>
                  <MenuItem key={u} value={u} sx={{ fontFamily: 'Courier New', fontSize: '0.875rem' }}>{u}</MenuItem>
                )}
              </Select>
            )}
          />
        </FormControl>

        {/* Priority */}
        <FormControl fullWidth sx={sxField}>
          <InputLabel>Priority</InputLabel>
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Select {...field} label="Priority">
                {[{ v: 'low', l: 'Low' }, { v: 'medium', l: 'Medium' }, { v: 'high', l: 'High — Urgent' }].map(p =>
                  <MenuItem key={p.v} value={p.v} sx={{ fontFamily: 'Courier New', fontSize: '0.875rem' }}>{p.l}</MenuItem>
                )}
              </Select>
            )}
          />
        </FormControl>

        {/* Location */}
        <div className="md:col-span-2">
          <TextField
            label="Pickup Location *"
            fullWidth
            error={!!errors.loc}
            helperText={errors.loc?.message}
            placeholder="Street address, Area, City"
            sx={sxField}
            {...register('loc', { required: 'Location is required' })}
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <TextField
            label="Additional Notes"
            fullWidth
            multiline
            rows={3}
            placeholder="Special instructions, packaging info, access details..."
            sx={{ ...sxField, '& .MuiInputBase-root': { fontFamily: 'Courier New', fontSize: '0.875rem', borderRadius: '6px' } }}
            {...register('notes')}
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end mt-5">
        <Button
          type="button"
          variant="outlined"
          onClick={() => reset()}
          sx={{ fontFamily: 'Courier New', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', borderColor: '#d1d9d1', color: '#5a7a5a' }}
        >
          Clear
        </Button>
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{ fontFamily: 'Courier New', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', background: '#1a6b3c', '&:hover': { background: '#0d4425' } }}
        >
          {loading ? 'Submitting...' : '→ Submit Request'}
        </Button>
      </div>
    </form>
  )
}