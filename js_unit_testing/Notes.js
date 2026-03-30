// JsUnit (2001)
// QUnit (2008) - jQuery
// Node.js (2009) Era:
// Mocha "test runner" & Chai "assertion library" (2011).
// Jasmine "batteries-included" framework
// Karma Created by AngularJS Team
// Jest (2016) Created by Meta (Facebook)
// Vitest (2022+)

// 0. Install/Update Node.js as JavaScript Runtime => run outside browser

// 1. Initialize Node Project
//    Terminal: npm init -y

// 2. We will use ESM so modify package.json
//    "type": "module",

// 3. Install Vitest Test Framework (-D install as devDependency)
//    Terminal: npm install -D vitest

// 4. Source Code => ESM (use named export)
/*
named export => exported as object
{
add: ()=>{},
subtract: ()=>{},
multiply: ()=>{},
divide: ()=>{},
}
*/

// 5. To test we need to run original/source code => ESM import
// Destructuring the imported object => then use/run

// Vitest run .test.js or .spec.js
// import original/source code to test

// AAA Testing Model
// - Arrange: Prepare Data and Environment (Handle all Edge Cases)
// - Act: Execute Function
// - Assert: Verify the result correct

// - Arrange: Prepare Data and Environment (Handle all Edge Cases)
// Inputs                   => Expected Outputs
// add(2,3)                 => 5
// add(-2,-3)               => -5
// add(0,0)                 => 0
// add(10000000,30000000)   => 40000000

// Test Case: Single Scenario used to verify behavior
// Test Suite: Collection of test cases

// Create Test Suite: describe("Test suite Name", ()=>{ // Test Cases })
// Create Test Cases: it or test("Test Case Name", ()=>{
// - Act: Execute Function
//    const actualResult = call original function
//    const expectedResult = .......
// -  Assert: Verify the result correct
// Assertion: expect()
// Matchers: Built-in Functions to Evaluate result
//    expect(actualResult).toBe(expectedResult);
// })

// Matchers:
// .toBe(val)           => Primitive Equality                => expect(1+1).toBe(2)
// .toEqual(obj)        => Deep Equality objects/arrays      => expect({a:1}).toEqual({a:1})
// .toStrictEqual(obj)  => + checks class types/undefined    => expect({a:1}).toEqual({a:1})
// .toContain(item)     => array contains value              => expect([1,2]).toContain(1)
// .toHaveLength(n)     => array .length property            => expect(list).toHaveLength(3)
// .toBeTruthy()        => value is "truthy"                 => expect(true).toBeTruthy()
// .toBeFalsy()         => value is "falsy"                  => expect(false).toBeFalsy()
// .toThrow(err?)       => a function throws an error        => expect(() => explode()).toThrow()

// To run Test
// Modify package.json
/*
  "scripts": {
    "test": "vitest"
  },
*/

// Mocking System
// Mock: Fake implementation that replaces the real behavior
// vi.fn() => Tool to create fake function
// mockReturnValue

// Mock & Spy Matchers
// vi.fn() or vi.spyOn()
// toHaveBeenCalled(): Was the function called at least once?
// toHaveBeenCalledTimes(n): Was it called exactly n times?
// toHaveBeenCalledWith(arg1, arg2): Was it called with specific arguments?
// toHaveReturned(): Did the function return without throwing?

// TDD vs BDD

// LifeCycle Hook
// beforeAll: Built-in function hook run once before any test start
// beforeEach: Built-in function hook run before every single test case
// afterEach: Built-in function hook run after every single test case
// afterAll: Built-in function hook run once after all tests ends

// Before Node.js => JavaScript Exclusive in Browser
// Global Object => window

// Node.js (2009)
// Global Object => global

// Web Workers (Script running the background)
// Global Object => self

// ES2020
// Global Object => globalThis

// In Node.js There is no DOM
// Test UI => Fake Browser
// Matrix Simulation
// 3rd Party Library => Create Virtual DOM (Simple JavaScript Object)
// jsdom and happy-dom

// Terminal: npm i -D jsdom
// Create vitest.config.js in (root) ./
/*
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
	},
});
*/

// To test React we need
// Testing-Library/react => Core Library test UI Components => render, screen
// jest-dom => human-readable assertion (button) => Assertion Library

// Terminal: npm i -D @testing-library/react  @testing-library/jest-dom jsdom vitest

// Create vitest.config.js
/*
import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
	resolve: {
		alias: {
			'@': new URL('./src', import.meta.url).pathname,
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./setupTests.js'],
		globals: true,
	},
});
*/

// Create setupTests.js
import '@testing-library/jest-dom';
// This import/add all custom matchers to Vitest's expect() function

// 1. RENDER: We take our component and draw it onto our invisible "jsdom"
// We pass the prop name="Hassan"

// 2. SCREEN: Represent Virtual Screen
// for searching the elements
// a- getBy => if not found crash
// b- queryBy => if not found return null
// c- findBy => wait for 1 sec then if not found crash

// getByRole: Golden Standard => find button, link, headings
// getByLabelText: Perfect for inputs
// getByText

// Events + States
// Old Method: fireEvent
// Newer Version: user-event
// Terminal: npm i -D @testing-library/user-event

test('Template for user interaction', async () => {
	// 2. Simulate user
	const user = userEvent.setup();

	// 3. render the screen
	render(<Greetings name='Sohila' />);

	// 4. Find element
	// const button = screen.getByRole('button');
	const button = screen.getByRole('button', { name: 'Increment' });

	// 5. Interact
	await user.click(button);

	// 6. Assertion
	expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
});


// APIs Testing
// Speed - Flakiness - Data Pollution - Cost
// Network Interception

// Mock Service Worker (MSW)
// Terminal: npm i -D msw

// ./src/mocks/server.js
// src/mocks/server.js
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// 1. Define the "handlers" (The rules for interception)
export const handlers = [
	// Rule: If any code tries to GET data from 'https://api.escuelajs.co/api/v1/users'
	http.get('https://api.escuelajs.co/api/v1/users', () => {
		// ...DO NOT let it go to the internet. Instead, return this fake JSON data instantly.
		return HttpResponse.json({
			id: 1,
			email: 'omar@yahoo.com',
			role: 'customer',
		});
	}),
];

// 2. Create the fake server using those rules
export const server = setupServer(...handlers);

// setupTests.js
import '@testing-library/jest-dom';
import { server } from './src/mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest';

// 1. Start the fake server BEFORE all tests run.
beforeAll(() => server.listen());

// 2. Reset any temporary rules we add during specific tests AFTER each test finishes.
// This guarantees Test Isolation (Module 0).
afterEach(() => server.resetHandlers());

// 3. Shut down the fake server AFTER all tests are completely done.
afterAll(() => server.close());

// Navigation Testing

// routes.jsx
import { Link } from 'react-router-dom';

export function Home() {
	return (
		<div>
			<h1>Home Page</h1>
			{/* A link that changes the URL to /about */}
			<Link to='/about'>Go to About</Link>
		</div>
	);
}

export function About() {
	return <h1>About Us</h1>;
}

// We define our routes as an array of objects
export const myAppRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/about', element: <About /> },
];

// navigation.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { myAppRoutes } from './routes';

describe('React Router Navigation', () => {
	test('clicking the link navigates to the About page', async () => {
		const user = userEvent.setup();

		// 1. CREATE THE FAKE ROUTER
		// We pass it our real app routes, but we tell it to start its invisible
		// URL bar exactly at the root page: ['/']
		const testRouter = createMemoryRouter(myAppRoutes, {
			initialEntries: ['/'],
		});

		// 2. RENDER THE ROUTER PROVIDER
		// Notice we do NOT render <Home /> directly. We render the RouterProvider,
		// which automatically looks at the initialEntries and renders <Home /> for us!
		render(<RouterProvider router={testRouter} />);

		// 3. VERIFY WE ARE ON THE HOME PAGE
		expect(screen.getByRole('heading', { name: 'Home Page' })).toBeInTheDocument();

		// 4. FIND THE LINK AND CLICK IT
		// A <Link> tag becomes an actual HTML anchor <a> tag, which has the role of 'link'
		const aboutLink = screen.getByRole('link', { name: 'Go to About' });
		await user.click(aboutLink);

		// 5. VERIFY THE SCREEN CHANGED
		// The Router instantly unmounts <Home /> and mounts <About />!
		// We check if the new heading exists.
		expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument();

		// We also verify the old heading is GONE!
		expect(screen.queryByRole('heading', { name: 'Home Page' })).toBeNull();
	});
});
