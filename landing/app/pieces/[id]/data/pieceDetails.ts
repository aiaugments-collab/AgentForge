// Sample triggers and actions data for pieces
export interface PieceAction {
  id: string;
  name: string;
  description: string;
  properties: Array<{
    name: string;
    type: 'text' | 'checkbox' | 'number' | 'dropdown';
    required?: boolean;
  }>;
  isInstant?: boolean;
}

export interface PieceDetails {
  triggers: PieceAction[];
  actions: PieceAction[];
}

// Sample data for Hedy (as shown in the HTML example)
export const hedyDetails: PieceDetails = {
  triggers: [
    {
      id: 'session-created',
      name: 'Session Created',
      description: 'Triggers when a new session is created in Hedy.',
      properties: [
        { name: 'Verify Signature', type: 'checkbox' }
      ],
      isInstant: true,
    },
    {
      id: 'highlight-created',
      name: 'Highlight Created',
      description: 'Triggers when a highlight is created during a session.',
      properties: [
        { name: 'Verify Signature', type: 'checkbox' }
      ],
      isInstant: true,
    },
    {
      id: 'session-ended',
      name: 'Session Ended',
      description: 'Triggers when a session is completed in Hedy.',
      properties: [
        { name: 'Verify Signature', type: 'checkbox' }
      ],
      isInstant: true,
    },
    {
      id: 'todo-exported',
      name: 'Todo Exported',
      description: 'Triggers when a todo item is exported from Hedy.',
      properties: [
        { name: 'Verify Signature', type: 'checkbox' }
      ],
      isInstant: true,
    },
  ],
  actions: [
    {
      id: 'get-session',
      name: 'Get Session',
      description: 'Retrieve a specific session by ID.',
      properties: [
        { name: 'Session ID', type: 'text', required: true }
      ],
    },
    {
      id: 'get-highlight',
      name: 'Get Highlight',
      description: 'Retrieve a specific highlight by ID.',
      properties: [
        { name: 'Highlight ID', type: 'text', required: true }
      ],
    },
    {
      id: 'list-todos',
      name: 'List Todos',
      description: 'Retrieve todos assigned to you in Hedy.',
      properties: [
        { name: 'Return All', type: 'checkbox' },
        { name: 'Limit', type: 'number' }
      ],
    },
    {
      id: 'get-topic',
      name: 'Get Topic',
      description: 'Retrieve details for a specific topic.',
      properties: [
        { name: 'Topic ID', type: 'text', required: true }
      ],
    },
    {
      id: 'list-topic-sessions',
      name: 'List Topic Sessions',
      description: 'Retrieve sessions associated with a specific topic.',
      properties: [
        { name: 'Topic ID', type: 'text', required: true },
        { name: 'Return All', type: 'checkbox' },
        { name: 'Limit', type: 'number' }
      ],
    },
    {
      id: 'list-sessions',
      name: 'List Sessions',
      description: 'Retrieve multiple sessions with optional topic filtering and pagination.',
      properties: [
        { name: 'Return All', type: 'checkbox' },
        { name: 'Limit', type: 'number' },
        { name: 'Response Format', type: 'dropdown' },
        { name: 'Topic', type: 'dropdown' },
        { name: 'After Cursor', type: 'text' },
        { name: 'Before Cursor', type: 'text' }
      ],
    },
    {
      id: 'list-highlights',
      name: 'List Highlights',
      description: 'Retrieve highlights with optional topic filtering and pagination.',
      properties: [
        { name: 'Return All', type: 'checkbox' },
        { name: 'Limit', type: 'number' },
        { name: 'Response Format', type: 'dropdown' },
        { name: 'Topic', type: 'dropdown' },
        { name: 'After Cursor', type: 'text' },
        { name: 'Before Cursor', type: 'text' }
      ],
    },
    {
      id: 'list-session-todos',
      name: 'List Session Todos',
      description: 'Retrieve todos generated for a specific session.',
      properties: [
        { name: 'Session ID', type: 'text', required: true },
        { name: 'Return All', type: 'checkbox' },
        { name: 'Limit', type: 'number' }
      ],
    },
    {
      id: 'list-topics',
      name: 'List Topics',
      description: 'Retrieve all topics from your Hedy workspace.',
      properties: [
        { name: 'Return All', type: 'checkbox' },
        { name: 'Limit', type: 'number' }
      ],
    },
  ],
};

// Default details for other pieces
export const defaultDetails: PieceDetails = {
  triggers: [
    {
      id: 'new-item',
      name: 'New Item',
      description: 'Triggers when a new item is created.',
      properties: [
        { name: 'Verify Signature', type: 'checkbox' }
      ],
      isInstant: true,
    },
    {
      id: 'updated-item',
      name: 'Updated Item',
      description: 'Triggers when an item is updated.',
      properties: [
        { name: 'Verify Signature', type: 'checkbox' }
      ],
      isInstant: true,
    },
  ],
  actions: [
    {
      id: 'create-item',
      name: 'Create Item',
      description: 'Create a new item.',
      properties: [
        { name: 'Name', type: 'text', required: true },
        { name: 'Description', type: 'text' }
      ],
    },
    {
      id: 'get-item',
      name: 'Get Item',
      description: 'Retrieve a specific item by ID.',
      properties: [
        { name: 'Item ID', type: 'text', required: true }
      ],
    },
    {
      id: 'update-item',
      name: 'Update Item',
      description: 'Update an existing item.',
      properties: [
        { name: 'Item ID', type: 'text', required: true },
        { name: 'Name', type: 'text' },
        { name: 'Description', type: 'text' }
      ],
    },
    {
      id: 'list-items',
      name: 'List Items',
      description: 'Retrieve multiple items.',
      properties: [
        { name: 'Limit', type: 'number' },
        { name: 'Filter', type: 'text' }
      ],
    },
  ],
};

// Function to get piece details
export function getPieceDetails(pieceId: string): PieceDetails {
  switch (pieceId) {
    case 'hedy':
      return hedyDetails;
    default:
      return defaultDetails;
  }
}
