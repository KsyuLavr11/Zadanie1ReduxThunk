const BASE_URL = 'http://localhost:3005/todos';

export const todosAPI = {
	readALL: async () => {
		const response = await fetch(BASE_URL);
		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса');
		}
		return await response.json();
	},
	create: async (newTodos) => {
		const response = await fetch(BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: newTodos }),
		});
		if (!response.ok) {
			throw new Error('Ошибка при добавлении задачи');
		}
		return await response.json();
	},
	update: async (id, newTitle) => {
		const response = await fetch(`${BASE_URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTitle,
			}),
		});
		if (!response.ok) {
			throw new Error('Ошибка при изменении задачи');
		}
		return await response.json();
	},
	delete: async (id) => {
		const response = await fetch(`${BASE_URL}/${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Ошибка при удалении задачи');
		}
		return null;
	},
};
