import { Disclosure,} from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { title: 'Kућа', href: '/',current:false },
  
  { title: 'О школи', href: '/oskoli', current:false },
  { title: 'Новости', href: 'http://localhost:3000/', current: false },
  { title: 'Галерија', href: 'http://localhost:3000/', current: false },
  { title: 'Настава', href: 'http://localhost:3000/', current: false },
  { title: 'Ученици', href: 'http://localhost:3000/', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Naviall() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="absolute flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex mb-18 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
                <div className="hidden   sm:block">
                  <div className="flex  ">
                    {navigation.map((item) => (
                     <a
                        key={item.title}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-yellow-400 text-white' : 'text-white bg-gray-400 hover:bg-gray-700 hover:text-white',
                          ' px-8 m-2 sm:text-xs xl:text-xl relative  py-2 my-2 rounded-full  font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >

                        {item.title} 
                      </a>
                    ))}
                  </div>
                </div>
                   
              </div>
            
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 mt-5 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-amber-400 w-24 rounded-2xl mt-10 text-white' : 'text-white w-24 rounded-2xl bg-gray-500 hover:text-white',
                    'block px-3 z-50 py-2 mt-12 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
