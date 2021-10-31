import React from 'react'

const Activity = () => {
  return (
    <div>
      <h2 className="text-4xl m-3 font-bold my-10 ">Acitivity</h2>
      <hr className="w-20 mx-auto" />
      <div className="lg:flex ">
        <div className="my-10 mx-3">
          <h3 className="text-4xl m-3 font-semibold w-62 md:flex">
            Change the way you travel, be closer to nature. Take a second to
            appreciate everyday beauty
          </h3>
          <img
            className="w-80 my-20 ml-5 transform scale-100 md:max-w-full lg:max-w-full mx-auto"
            src="https://i.ibb.co/6R5mryb/cover-2.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <img
              src="https://i.ibb.co/tYhmHbW/wild-removebg-preview.png"
              alt=""
            />
            <p className="text-xl font-medium">Wild life</p>
            <p>
              Global Wildlife Conservation conserves the diversity of life on
              Earth by
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/SVghVdd/canoeing-removebg-preview.png"
              alt=""
            />
            <p className="text-xl font-medium">Canoeing</p>
            <p>
              Canoe camping is one of the oldest forms of travel and exploration
              of the
            </p>
          </div>
          <div>
            <img src="https://i.ibb.co/F55FQWM/h-removebg-preview.png" alt="" />
            <h4 className="text-xl font-medium">Hiking</h4>
            <p>
              Backpacking is an adventure that blends hiking with backcountry
              camping.
            </p>
          </div>
          <div>
            <img
              className="my-4"
              src="https://i.ibb.co/74nfm3c/lake-removebg-preview.png"
              alt=""
            />
            <p className="text-xl font-medium">Lake</p>
            <p>
              Beautiful pondarosa pine trees, Mt creeks, lakes Skiing in winter,
              sledding, Ice fishing in the winter
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
