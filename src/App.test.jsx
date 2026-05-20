import '@testing-library/jest-dom/vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App.jsx';

afterEach(() => {
  cleanup();
});

describe('Executive Intelligence Command Center', () => {
  it('opens directly into the command center', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /what matters now/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/renewal risk/i)).toBeInTheDocument();
    expect(screen.queryByText(/prototype shell ready/i)).not.toBeInTheDocument();
  });

  it('updates briefing details when a risk is selected', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', {
        name: /competitor ai adoption is compressing service expectations/i,
      }),
    );

    expect(screen.getByText(/competitor ai messaging/i)).toBeInTheDocument();
    expect(screen.getByText(/response strategy pending/i)).toBeInTheDocument();
  });

  it('changes briefing emphasis by audience', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByLabelText(/executive audience/i), 'cfo');

    expect(screen.getByText(/^CFO:/)).toBeInTheDocument();
  });

  it('simulates briefing generation', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /generate briefing/i }));

    expect(screen.getByRole('button', { name: /generating/i })).toBeDisabled();
    await waitFor(() => {
      expect(screen.getByText(/refreshed just now/i)).toBeInTheDocument();
    });
  });

  it('updates escalation local state', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /acknowledge renewal review/i }));

    expect(screen.getByText(/acknowledged by executive office/i)).toBeInTheDocument();
  });
});
