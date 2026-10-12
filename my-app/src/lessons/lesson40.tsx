import {
  Component,
  useEffect,
  type ComponentType,
  type ReactNode,
} from 'react';
import styled from 'styled-components';

export const Greeting = ({ user }: { user: string }) => {
  return <h1>Hello, {user}</h1>;
};

type GreetingClassProps = {
  name: string;
  userId: number;
};

export class GreetingClass extends Component<
  GreetingClassProps,
  { count: number }
> {
  constructor(props: GreetingClassProps) {
    super(props);
    console.log('constructor');
    this.state = {
      count: 0,
    };
  }

  // timerId!: number;

  componentDidMount(): void {
    console.log('componentDidMount');
    // document.addEventListener('')
    // this.timerId = setInterval(() => {
    //   console.log('tick');
    // }, 1000);
    this.loadUser(this.props.userId);
  }

  componentDidUpdate(prevProps: Readonly<GreetingClassProps>): void {
    if (prevProps.userId !== this.props.userId) {
      console.log('пользователь изменился');
      this.loadUser(this.props.userId);
    }
    console.log('componentDidUpdate');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
    //очистка ресурсов
    // document.removeEventListener('')
    // clearInterval(this.timerId);
  }

  loadUser = (userId: number) => {
    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        userId,
      }));
    }, 1000);
  };

  render() {
    console.log('render');
    const { name } = this.props;

    if (!name) {
      return null;
    }

    return (
      <>
        <h1>Hello, {name}</h1>
        <h2>User id - {this.props.userId}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              ...prevState,
              count: prevState.count + 1,
            }))
          }
        >
          Count {this.state.count}
        </button>
      </>
    );
  }
}

const Page1 = () => {
  return <h1>PAGE 1</h1>;
};

const Page2 = () => {
  return <h1>PAGE 2</h1>;
};

const withDocumentTitle = (WrappedComponent: ComponentType) => {
  const NewComponent = ({ pageN }: { pageN: number }) => {
    useEffect(() => {
      document.title = `PAGE ${pageN}`;
    }, [pageN]);

    return <WrappedComponent />;
  };

  return NewComponent;
};

// eslint-disable-next-line react-refresh/only-export-components
export const Page1WithTitle = withDocumentTitle(Page1);
// eslint-disable-next-line react-refresh/only-export-components
export const Page2WithTitle = withDocumentTitle(Page2);

export const Card = ({ children }: { children: ReactNode }) => {
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  padding: 24px;
  border: 1px solid black;
`;
