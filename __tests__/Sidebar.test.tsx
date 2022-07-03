/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
// import Home from '../pages/index'
import Sidebar from '@/components/Sidebar/Sidebar';

describe('Sidebar', () => {
  it('renders list', () => {
    render(<Sidebar />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  })

  it("has list item with Home title", () => {
    const { getByTitle } = render(<Sidebar />);
    expect(getByTitle(/home/i)).toBeInTheDocument();
  })
  
  it("has list item with Bookmark title", () => {
    const { getByTitle, container } = render(<Sidebar />);
    expect(getByTitle(/bookmark/i)).toBeInTheDocument();
    expect(container.querySelector('.icon')).toBeVisible();
  })

  it("has list item with Bookmark title", () => {
    const { container } = render(<Sidebar />);
    expect(container.querySelector('.icon')).toBeVisible();
  })

  it("has 3 listitem with title in the list", () => {
    const { container } = render(<Sidebar />);
    expect(container.querySelectorAll('.item').length).toBe(3);

    const listItem = screen.getAllByRole('listitem')
    expect(listItem.length).toBe(3)
    listItem.forEach(item => {
      expect(item).toHaveProperty('title')
    })
  })
})

describe("Sidebar snapshots", ()=> {
  it ("renders correctly", ()=> {
    const tree = render(<Sidebar />)
    expect(tree).toMatchSnapshot();
  })
})