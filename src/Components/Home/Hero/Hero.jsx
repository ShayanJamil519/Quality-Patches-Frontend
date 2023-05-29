import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:px-20 bg-[#f2f5f7]">
    <div className="flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-8/10 p-8">
        <h1 className="text-md md:text-4xl font-bold mb-4 text-[#70171A] text-center lg:text-left">Custom Patches Made Simple!</h1>
        <p className="text-md mb-4 md:text-xl text-center lg:text-left">Customize your own patch with us! Quality Patches offer high-quality custom patches to enhance your brand recognition. You can get the finest work at Quality Patches if you want to order custom patches online.</p>
        <img src="/assets/Hero/hero__bird.webp" alt="Bird" className="my-4 mt-8 w-full" />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-7/12 p-8 ">
        <div className="border-2 border-black rounded-lg p-6">
        <div className="bg-[#72001e] p-2 rounded-md justify-center mb-12 border-slate-300">
          <h3 className="text-2xl font-bold text-center text-white">Get Quote Now</h3>
        </div>
        <form className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Width */}
            <div>
              <input type="text" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Width' />
            </div>
            {/* Height */}
            <div>
              <input type="text" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Height' />
            </div>
            {/* Dropdown 1 */}
            <div>
              <select className="border p-2 w-full rounded-lg border-slate-900" placeholder='Embroided Patches'>
                <option>Embroidered Patches</option>
                <option>Chenille Patches</option>
                <option>Enamel Pins</option>
                <option>Challenge Coins</option>
                <option>Tackle Twill Patches</option>
                <option>Applique Patches</option>
                <option>Leather Patches</option>
                <option>PVC / Rubber Patches</option>
                <option>Woven Patches</option>
                <option>Sequin Patches</option>
                {/* Dropdown options */}
              </select>
            </div>
            {/* Dropdown 2 */}
            <div>
              <select className="border p-2 w-full rounded-lg border-slate-900">
                <option>Iron on / Heat Seal</option>
                <option>Velcro (Both Hook & Loop)</option>
                <option>Peel & Stick / Self Adhesive</option>
                <option>Sew on</option>
                {/* Dropdown options */}
              </select>
            </div>
            {/* Quantity */}
            <div>
              <input type="text" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Quantity' />
            </div>
            {/* Name */}
            <div>
              <input type="text" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Name' />
            </div>
            {/* Email */}
            <div>
              <input type="email" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Email' />
            </div>
            {/* Contact No */}
            <div>
              <input type="text" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Contact No.' />
            </div>
            {/* Instructions */}
            <div className="md:col-span-2">
              <textarea className="border p-2 w-full rounded-lg border-slate-900 resize-none" rows="4" placeholder='Instructions'></textarea>
            </div>
            <div className="md:col-span-2">
              <select className="border p-2 w-full rounded-lg border-slate-900" name="">
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>ASI</option>
                <option>SAGE</option>
                <option>Instagram</option>
                <option>Referred by someone</option>
                <option>Already Registered</option>
                <option>Don't Remember</option>
              </select>
            </div>
            {/* Target Budget */}
            <div className="md:col-span-2">
              <input type="text" className="border p-2 w-full rounded-lg border-slate-900" placeholder='Targeted Budget for these ?' />
            </div>
            {/* Upload File */}
            <div className="md:col-span-2">
              <input type="file" className="border p-2 w-full" />
            </div>
            <p>Max. file size: 80 MB.</p>
          </div>
          {/* Submit Button */}
          <button className="bg-[#72001e] text-white py-2 px-4 rounded mt-4 w-full text-3xl border rounded-md border-slate-500">Submit</button>
        </form>
        </div>
      </div>
    </div>

    {/* Images Section */}
    <div>
      <div className="flex lg:flex-row flex-col items-center gap-3">
        <img src="/assets/Hero/hero__stars.png" alt="stars" className="hidden lg:block lg:flex w-80 h-20" />
        <img src="/assets/Hero/hero__awards.png" alt="awards" className="w-80 h-16" />
      </div>
      <a href="/" className="flex items-center justify-center lg:block">
        <img src="/assets/Hero/hero__ratings.png" alt="ratings" className='text-center' />
      </a>
    </div>
    </div>
  );
};

export default Hero;